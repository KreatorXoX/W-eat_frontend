import { AiOutlineClose } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useParams, useNavigate, Link } from "react-router-dom";
import FormInput from "../shared/components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { TbMinus, TbPlus } from "react-icons/tb";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useShoppingCart } from "../context/shoppingCartStore";
import MenuServices from "../api/services/menu.service";
import {
  ProductCartInput,
  productCartSchema,
} from "../utils/schema/cart.schema";

interface Props {}
const formatExtras = (data: IExtraItem[] | undefined) => {
  return data?.map((extra) => {
    const option: OptionSelect = {
      value: extra._id + "-" + extra.price,
      label: extra.name + " (+ €" + extra.price.toFixed(2) + ")",
    };
    return option;
  });
};
const EditProduct = (props: Props) => {
  const navigate = useNavigate();
  const id = useParams().id;

  const [extraTotal, setExtraTotal] = useState<number>(0);
  const [itemPrice, setItemPrice] = useState<number>(0);

  const cartItems = useShoppingCart((state) => state.cart);
  const replaceItem = useShoppingCart((state) => state.replaceItem);

  const item = cartItems.find((item) => item.id === id);
  const priceIdx = item?.mainProduct.sizes.findIndex(
    (prod) => prod.size === item.size
  );

  const allSizes = item?.mainProduct.sizes.map((size) => {
    return {
      label: size.size + " (+ €" + size.price.toFixed(2) + ")",
      value: size.price,
    };
  });

  const productId = item?.mainProduct._id!;
  const { data: product } = MenuServices.useProduct(productId);
  const orgCatExtras = product?.category?.extras;

  const [quantity, setQuantity] = useState<number>(item ? item.quantity : 0);

  const extrasObject = item?.extras?.reduce((acc: any, extra) => {
    acc[extra.name] = extra.values;
    return acc;
  }, {});

  const { handleSubmit, control, watch, getValues } = useForm<ProductCartInput>(
    {
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: zodResolver(productCartSchema),
      defaultValues: {
        extras: extrasObject,

        size: {
          value: item?.mainProduct.sizes[priceIdx!]?.price,
          label: item?.mainProduct.sizes[priceIdx!]?.size,
        },
      },
    }
  );

  const updateItemHandler: SubmitHandler<ProductCartInput> = (data) => {
    let extras: { name: string; values: OptionSelect[] | undefined }[] = [];

    for (const key in data) {
      if (key === "size") continue;

      if (key === "extras") {
        const extrasObject = data[key];
        for (let extraName in extrasObject) {
          extras!.push({ name: extraName, values: extrasObject[extraName] });
        }
      }
    }
    const productPrice = getValues("size").value;

    const updatedProduct = {
      id: item!.id,
      mainProduct: item?.mainProduct!,
      quantity,
      extras: extras!.map((extra) => {
        return {
          name: extra.name,
          values: extra.values,
        };
      }),
      size: getValues("size.label"),
      totalPrice: +productPrice + extraTotal,
    };

    replaceItem(updatedProduct);
    navigate("..");
  };

  useEffect(() => {
    let extrasTotal = 0;

    for (const key in getValues()) {
      if (key === "size") {
        setItemPrice(+getValues("size.value"));
        continue;
      }
      let extrasPricesArray: number[] = [];

      const extras = getValues("extras");

      for (const extraKey in extras) {
        if (extras.hasOwnProperty(extraKey)) {
          const extraArray = extras[extraKey]!;

          for (const extra in extraArray) {
            const price = parseFloat(extraArray[extra].value?.split("-")[1]);

            extrasPricesArray.push(price);
          }
        }
      }
      extrasPricesArray?.forEach((price) => {
        extrasTotal += price;
      });
    }
    setExtraTotal(extrasTotal);
  }, [watch()]);

  return (
    <div className="text-gray-700 dark:text-slate-200">
      <div className="space-y-4 py-2 px-4">
        <div className="flex justify-between">
          <div className="flex flex-row items-center gap-3 ">
            <h3 className="text-2xl font-semibold">
              {" "}
              {item!.mainProduct?.name}
            </h3>
            <Link
              to="/nutritions"
              state={{ alergens: item!.mainProduct?.allergens }}
              className="flex items-center"
            >
              <ImInfo className="inline lg:text-xl" />
            </Link>
          </div>
          <Link to="..">
            <AiOutlineClose className="cursor-pointer text-2xl" />
          </Link>
        </div>
        <p className="">{item?.mainProduct?.ingridients}</p>
        <p className="text-xl font-bold">
          € {itemPrice.toFixed(2)}
          {/* {item?.mainProduct?.sizes[priceIdx!].price.toFixed(2)} */}
          {/* might make it more simple */}
        </p>
      </div>
      <div className="h-full min-h-[30rem]">
        <form onSubmit={handleSubmit(updateItemHandler)} className="space-y-4">
          <div className="bg-slate-100 py-2 px-5 pb-10 dark:bg-gray-800 ">
            <>
              {item?.mainProduct.sizes.length! > 1 && (
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
                      isClearable={false}
                    />
                  </div>
                </div>
              )}
            </>
            <>
              {orgCatExtras?.map((extra) => {
                return (
                  <div key={`${extra._id}`}>
                    <h3 className="mt-2 font-medium">{extra.name}</h3>
                    <div className="">
                      <FormInput
                        type="select"
                        name={`extras.${extra.name}`}
                        id={`extras.${extra.name}`}
                        half={false}
                        label={""}
                        error={undefined}
                        options={formatExtras(extra.extraItems!)}
                        control={control}
                        isMulti={true}
                      />
                    </div>
                  </div>
                );
              })}
            </>
          </div>

          <div className="flex w-full gap-4 px-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-full bg-gray-200 p-2  dark:bg-gray-500 dark:text-white"
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
                className="rounded-full bg-gray-200 p-2  dark:bg-gray-500 dark:text-white"
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

export default EditProduct;
