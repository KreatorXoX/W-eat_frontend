import { AiOutlineClose } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import { useShoppingCart } from "../context/shoppingCartStore";
import { menu } from "../shared/utils/data";
import { getProductById } from "./Product";

interface Props {}

const EditProduct = (props: Props) => {
  const cartItems = useShoppingCart((state) => state.cart);
  const replaceItem = useShoppingCart((state) => state.replaceItem);

  const [extraTotal, setExtraTotal] = useState<number>(0);

  const id = useParams().id;
  const item = cartItems.find((item) => item.id === id);

  const itemId = item?.mainProduct.id!;

  const orgCatExtras = menu.find(
    (cate) => cate.name === getProductById(itemId)?.category
  )?.extras;

  const [quantity, setQuantity] = useState<number>(item ? item.quantity : 0);

  const extrasObject = item?.extras.reduce((acc: any, extra) => {
    acc[extra.name] = extra.values;
    return acc;
  }, {});

  const { handleSubmit, control, watch, getValues } = useForm<SelectExtraItem>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(selectExtraItem),
    defaultValues: {
      ...extrasObject,
    },
  });

  const navigate = useNavigate();

  const addItemHandler: SubmitHandler<any> = (data) => {
    let extras: { name: string; values: OptionSelect[] }[] = [];
    for (const key in data) {
      extras.push({ name: key, values: data[key] });
    }

    const updatedProduct = {
      id: item!.id,
      mainProduct: item?.mainProduct!,
      quantity,
      extras,
      totalPrice: item!.mainProduct!.price + extraTotal,
    };

    replaceItem(updatedProduct);
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
            <h3 className="font-semibold text-2xl">
              {" "}
              {item!.mainProduct?.name}
            </h3>
            <Link
              to="/nutritions"
              state={{ alergens: item!.mainProduct?.alergens }}
              className="flex items-center"
            >
              <ImInfo className="inline lg:text-xl" />
            </Link>
          </div>
          <Link to="..">
            <AiOutlineClose className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <p className="">{item?.mainProduct?.ingridients}</p>
        <p className="font-bold text-xl">
          € {item?.mainProduct?.price.toFixed(2)}
        </p>
      </div>
      <div className="h-full min-h-[30rem]">
        <form onSubmit={handleSubmit(addItemHandler)} className="space-y-4">
          <div className="bg-slate-100 dark:bg-gray-800 py-2 pb-10 px-5 ">
            {orgCatExtras?.map((extra, idx) => {
              return (
                <div key={`${idx}`}>
                  <h3 className="font-medium mt-2">{extra.name}</h3>
                  <div className="">
                    <FormInput
                      type="select"
                      name={`${extra.name}`}
                      id={`${extra.name}`}
                      half={false}
                      label={""}
                      error={undefined}
                      options={formatExtras(orgCatExtras!).get(`${extra.name}`)}
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
                className="p-2 rounded-full bg-gray-200  dark:bg-gray-500 dark:text-white"
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
                className="p-2 rounded-full bg-gray-200  dark:bg-gray-500 dark:text-white"
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
                {item?.mainProduct?.price
                  ? ((item.mainProduct.price + extraTotal) * quantity).toFixed(
                      2
                    )
                  : ""}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
