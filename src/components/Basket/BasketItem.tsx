import { FormEvent, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbMinus, TbPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CartItem, useShoppingCart } from "../../context/shoppingCartStore";

type Props = {
  item: CartItem;
};

const BasketItem = ({ item }: Props) => {
  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

  const addToCart = useShoppingCart((state) => state.addToCart);
  const removeFromCart = useShoppingCart((state) => state.removeFromCart);

  const addNote = useShoppingCart((state) => state.addNote);
  const removeNote = useShoppingCart((state) => state.removeNote);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addNote(item.id, note);
    setShowNoteForm(false);
  };
  return (
    <div className="border-b space-y-4 mb-4 px-5 lg:px-0">
      <div className="relative items-center gap-2 text-base font-[500]">
        <span className="absolute top-0 left-0">{item.quantity}</span>
        <div className="flex justify-between w-full pl-5">
          <Link
            to={`/edit-product/${item.id}`}
            className={`break-words
                    hover:no-underline decoration-gray-700 dark:decoration-slate-100 underline underline-offset-2 ${
                      location.pathname === "/checkout"
                        ? "no-underline pointer-events-none"
                        : ""
                    }`}
          >
            {item.mainProduct?.title}
          </Link>
          {/* item and price */}
          <span className="whitespace-nowrap font-light">
            € {(item.totalPrice * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      {/* extra suplements if there are any ?? */}
      <span className="flex items-center text-xs pl-5 italic font-light line-clamp-2">
        {item.mainProduct?.ingridients}
      </span>
      {location?.pathname !== "/checkout" && (
        <div className="w-full flex flex-col justify-between gap-4 items-start py-2 pl-5 lg:flex-row lg:items-center">
          {!showNoteForm && (
            <>
              {!item.notes && (
                <button
                  onClick={() => setShowNoteForm(true)}
                  className="text-base underline hover:no-underline"
                >
                  Add note
                </button>
              )}

              {/* show this if there is note */}
              {item.notes && (
                <div className="w-full">
                  <div className=" bg-orange-300/20 dark:bg-gray-500 font-semibold rounded-md px-2 py-1 flex justify-between items-center w-full">
                    <p className="text-xs text-gray-500 dark:text-slate-50 line-clamp-2">
                      {item.notes}
                    </p>
                    <p>
                      <AiOutlineCloseCircle
                        className="text-red-500 text-xl hover:cursor-pointer"
                        onClick={() => removeNote(item.id)}
                      />
                    </p>
                  </div>
                  {location?.pathname !== "/checkout" && (
                    <div>
                      <button
                        onClick={() => setShowNoteForm(true)}
                        className="text-sm underline hover:no-underline py-2"
                      >
                        Edit note
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="w-20 flex px-2 gap-2 text-base">
                <button className="rounded-full bg-gray-200 p-1 hover:bg-gray-300 dark:text-black">
                  <TbMinus onClick={() => removeFromCart(item.id)} />
                </button>
                <button
                  className="rounded-full bg-gray-200 p-1 hover:bg-gray-300 dark:text-black"
                  onClick={() => addToCart(item)}
                >
                  <TbPlus />
                </button>
              </div>
            </>
          )}

          {showNoteForm && (
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-2 w-full"
            >
              <textarea
                onChange={(e) => setNote(e.target.value)}
                defaultValue={item.notes}
                className="outline-none rounded-lg dark:text-black p-1 text-xs bg-gray-200"
              />
              <button
                className="bg-orange-500 text-slate-50 px-4 py-[0.15em] rounded-lg w-1/3 self-end"
                type="submit"
              >
                Save
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default BasketItem;
