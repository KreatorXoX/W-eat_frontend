type UserContext = {
  id: string;
};

type ExtraItem = {
  id: string;
  name: string;
  price: number;
};
type Extra = {
  id: string;
  name: string;
  paid: boolean;
  extraItems: ExtraItem[];
};

type Price = {
  size: string;
  price: number;
};
type Item = {
  id: string;
  name: string;
  description: string;
  ingridients: string;
  sizes: Price[];
  alergens: string[];
  category: string;
  tag?: string;
};

type Category = {
  id: string;
  name: string;
  products: Item[];
  extras: Extra[];
};
type Menu = Category[];

type OptionSelect = {
  value: string | number;
  label: string;
};

type Order = {
  id: string;
  orderDate: string;
  price: number;
  status?: "pending" | "accepted" | "canceled" | "delivered" | "shipped";
};

type OrderHistory = {
  id: string;
  orderDate: string;
  price: number;
  status: "delivered" | "canceled";
};

type Customer = {
  id: string;
  name: string;
  email: string;
  status: "verified" | "pending" | "suspended";
};
type CartItem = {
  id: string;
  mainProduct: IProduct;
  category?: string;
  extras?: { name: string; values: OptionSelect[] | undefined }[];
  size: string;
  quantity: number;
  totalPrice: number;
  notes?: string;
};

type OrderUpdate = {
  status?: "pending" | "accepted" | "canceled" | "delivered" | "shipped";
  paymentStatus?: "pending" | "successful";
};

type Address = {
  street: string;
  city: string;
  houseNumber: string;
  postalCode: string;
};

// Backend Related Interfaces
interface IToken {
  accessToken: string;
}
interface IAccessTokenType {
  UserInfo: {
    _id: string;
    email: string;
    isAdmin: boolean;
  };
  exp: number;
  iat: number;
}
interface IApi {
  _id: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}
interface IUser extends IApi {
  name: string;
  email: string;
  isSuspended: boolean;
  homeAddress?: Address;
  workAddress?: Address;
  otherAddress?: Address;
}

interface ICategory extends IApi {
  name: string;
  products: IProduct[];
  extras: IExtra[];
}

interface IProductSize {
  size: string;
  price: number;
}

interface IProduct extends IApi {
  name: string;
  description: string;
  sizes: IProductSize[];
  ingridients: string;
  allergens?: string[];
  tag?: string;
  category?: ICategory;
}

interface IExtraItem extends IApi {
  name: string;
  price: number;
  allergens?: string[];
}

interface IExtra extends IApi {
  name: string;
  paid: boolean;
  extraItems?: IExtraItem[];
}
interface IOrderItem {
  product: IProduct;
  extras: IExtraItem[];
  quantity: number;
  size: string;
  note?: string;
}

interface IOrder extends IApi {
  orderItems: IOrderItem[];
  deliveryCost?: number;
  totalPrice?: number;
  note?: string;
  status: "pending" | "accepted" | "canceled" | "delivered" | "shipped";
  address: string;
  placeOrderTime: string;
  paymentMethod: string;
  paymentStatus: string;
}

interface ICategory extends IApi {
  name: string;
  products?: IProduct[];
  extras?: IExtra[];
}

interface IReview extends IApi {
  user: IUser;
  content?: string;
  rating: number;
  response?: string;
}

interface IRestaurant extends IApi {
  name: string;
  address: string;
  email?: string;
  phoneNumber?: string;
  backgroundImage?: string;
  minDeliveryAmount: number;
  averageDeliveryTime: string;
  deliveryCost: number;
  operationTime: {
    openingTime: string;
    closingTime: string;
  };
  reviews?: IReview[];
}

interface IMenu extends IApi {
  categories: ICategory[];
  restaurant: IRestaurant;
  rating: number;
}
