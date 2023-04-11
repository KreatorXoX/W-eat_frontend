import { AiOutlineClose } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useParams, useNavigate, Link } from "react-router-dom";
import { menu } from "../shared/utils/data";
import FormInput from "../shared/components/Form/Input";
import { useForm, SubmitHandler, get, useFieldArray } from "react-hook-form";
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
export const getProductById = (id: string) => {
  let pro: Item | undefined;
  for (let category of menu) {
    for (let product of category.products) {
      if (product.id === id) return product;
    }
  }
  return undefined;
};

const Product = (props: Props) => {
  const addToCart = useShoppingCart((state) => state.addToCart);
  const [quantity, setQuantity] = useState<number>(1);
  const [extraTotal, setExtraTotal] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<number>(0);
  const id = useParams().id!;

  const item = getProductById(id);
  const CategoryExtras = menu.find(
    (category) => category.name === item?.category
  )?.extras;

  const allSizes = item?.sizes.map((size) => {
    return {
      label: size.size,
      value: size.price,
    };
  });

  const { handleSubmit, control, watch, getValues } = useForm<SelectExtraItem>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(selectExtraItem),
    defaultValues: {
      size: { value: item?.sizes[0].price, label: item?.sizes[0].size },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "extras",
  });

  const navigate = useNavigate();
  const addItemHandler: SubmitHandler<any> = (data) => {
    let extras: { name: string; values: OptionSelect[] }[] = [];
    for (const key in data) {
      extras.push({ name: key, values: data[key] });
    }

    const productPrice = getValues("size").value;
    const newProduct = {
      id: uuidv4(),
      mainProduct: item!,
      quantity,
      extras,
      totalPrice: +productPrice + extraTotal,
    };
    addToCart(newProduct);
    navigate("..");
  };
  useEffect(() => {
    let extrasTotal = 0;
    let itemPrice = 0;
    for (const key in getValues()) {
      if (key === "size") {
        console.log(getValues());
        // itemPrice = getValues("sizes")!.value as number;
        continue;
      }
      const extrasPricesArray = getValues(key)?.map(
        (item) => (item.value as string).split("-")[1]
      );
      extrasPricesArray?.forEach((price) => {
        extrasTotal += parseFloat(price);
      });
    }
    // console.log(getValues("sizes"));
    setItemPrice(itemPrice);
    setExtraTotal(extrasTotal);
  }, [watch()]);
  return (
    <div className="text-gray-700 dark:text-slate-200">
      <div className="space-y-4 py-2 px-4">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3 ">
            <h3 className="text-2xl font-semibold">{item?.name}</h3>
            <Link
              to="/nutritions"
              state={{ alergens: item?.alergens }}
              className="flex items-center"
            >
              <ImInfo className="inline lg:text-xl" />
            </Link>
          </div>
          <Link to="..">
            <AiOutlineClose className="cursor-pointer text-2xl" />
          </Link>
        </div>
        <p>{item?.ingridients}</p>
        <p className="text-xl font-bold">€ {item?.sizes[0].price.toFixed(2)}</p>
      </div>
      <div className="h-full min-h-[30rem]">
        <form onSubmit={handleSubmit(addItemHandler)} className="space-y-4">
          <div className="bg-slate-100 py-2 px-5 pb-10 dark:bg-gray-800 ">
            {item?.sizes.length! > 1 && (
              <div>
                <h3 className="mt-2 font-medium">Sizes</h3>
                <div>
                  <FormInput
                    type="select"
                    name="size"
                    id="size"
                    half={false}
                    label={""}
                    error={undefined}
                    options={allSizes}
                    control={control}
                  />
                </div>
              </div>
            )}

            {CategoryExtras?.map((extra) => {
              return (
                <div key={`${extra.id}`}>
                  <h3 className="mt-2 font-medium">{extra.name}</h3>
                  <div>
                    <FormInput
                      type="select"
                      name={`${extra.name}`}
                      id={`${extra.name}`}
                      half={false}
                      label={""}
                      error={undefined}
                      options={formatExtras(CategoryExtras!).get(
                        `${extra.name}`
                      )}
                      control={control}
                      isMulti={true}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex w-full gap-4 px-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-full bg-gray-200 p-2 dark:bg-gray-500 dark:text-white"
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
                className="rounded-full bg-gray-200 p-2 dark:bg-gray-500 dark:text-white"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                <TbPlus />
              </button>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 px-5 py-2 text-slate-50"
            >
              <span>
                €{" "}
                {itemPrice
                  ? ((itemPrice + extraTotal) * quantity).toFixed(2)
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
