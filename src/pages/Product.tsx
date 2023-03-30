import { AiOutlineClose } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useParams, useNavigate, Link } from "react-router-dom";
import { menu } from "../shared/utils/data";
import FormInput from "../shared/components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { TbMinus, TbPlus } from "react-icons/tb";
import { useEffect, useState } from "react";
import {
  selectExtraItem,
  SelectExtraItem,
} from "../shared/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatExtras } from "../shared/utils/getExtrasOptions";
import { v4 as uuidv4 } from "uuid";
import { useShoppingCart } from "../context/shoppingCartStore";

interface Props {}

// we can remove this after backend is created
// and react-query implemented.
export const getProductById = (id:string)=>{
  let pro:Item | undefined;
  for(let category of menu){
    for(let product of category.products){
      if(product.id === id)
      return product
    }
  }
  return undefined
}

const Product = (props: Props) => {

  
  const addToCart = useShoppingCart((state) => state.addToCart);
  const [quantity, setQuantity] = useState<number>(1);
  const [extraTotal, setExtraTotal] = useState<number>(0);
  const id = useParams().id!;
  
  const item = getProductById(id)
  const CategoryExtras = menu.find(category=>category.name === item?.category)?.extras
  
  const { handleSubmit, control, watch, getValues } = useForm<SelectExtraItem>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(selectExtraItem),
  });
  const navigate = useNavigate();
  const addItemHandler: SubmitHandler<any> = (data) => {
    let extras: { name: string; values: OptionSelect[] }[] = [];
    for (const key in data) {
      extras.push({ name: key, values: data[key] });
    }
    const newProduct = {
      id: uuidv4(),
      mainProduct: item!,
      quantity,
      extras,
      totalPrice: item!.price + extraTotal,
    };
    addToCart(newProduct);
    navigate("..");
  };
  useEffect(() => {
    let extrasTotal = 0;
    for (const key in getValues()) {
      const extrasPricesArray = getValues(key)?.map(
        (item) => item.value.split("-")[1]
      );
      extrasPricesArray?.forEach((price) => {
        extrasTotal += parseFloat(price);
      });
    }
    setExtraTotal(extrasTotal);
  }, [watch()]);
  return (
    <div className="dark:text-slate-200 text-gray-700">
      <div className="space-y-4 py-2 px-4">
        <div className="flex justify-between">
          <div className="flex flex-row gap-3 items-center ">
            <h3 className="font-semibold text-2xl">{item?.title}</h3>
            <Link
              to="/nutritions"
              state={{ alergens: item?.alergens }}
              className="flex items-center"
            >
              <ImInfo className="inline lg:text-xl" />
            </Link>
          </div>
          <Link to="..">
            <AiOutlineClose className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <p className="">{item?.ingridients}</p>
        <p className="font-bold text-xl">€ {item?.price.toFixed(2)}</p>
      </div>
      <div className="h-full min-h-[30rem]">
        <form onSubmit={handleSubmit(addItemHandler)} className="space-y-4">
          <div className="bg-slate-100 dark:bg-gray-800 py-2 pb-10 px-5 ">
            {CategoryExtras?.map((extra) => {
              return (
                <div key={`${extra.id}`}>
                  <h3 className="font-medium mt-2">{extra.name}</h3>
                  <div className="">
                    <FormInput
                      type="select"
                      name={`${extra.name}`}
                      id={`${extra.name}`}
                      half={false}
                      label={""}
                      error={undefined}
                      options={formatExtras(CategoryExtras!).get(`${extra.name}`)}
                      control={control}
                      isMulti={true}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex px-5 gap-4">
            <div className="flex gap-2 items-center">
              <button
                type="button"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-500 dark:text-white"
                onClick={() => {
                  setQuantity((prev) => {
                    if (prev === 1) return 1;
                    return prev - 1;
                  });
                }}
              >
                <TbMinus />
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-500 dark:text-white"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                <TbPlus />
              </button>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-slate-50 px-5 py-2 rounded-full w-full"
            >
              <span>
                €{" "}
                {item?.price
                  ? ((item.price + extraTotal) * quantity).toFixed(2)
                  : ""}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
