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
    <div className="mb-4 space-y-4 border-b px-5 dark:border-b-gray-500 lg:px-0">
      <div className="relative items-center gap-2 text-base font-[500]">
        <span className="absolute top-0 left-0">{item.quantity}</span>
        <div className="flex w-full justify-between pl-5">
          <Link
            to={`/edit-product/${item.id}`}
            className={`break-words
                    underline decoration-gray-700 underline-offset-2 hover:no-underline dark:decoration-slate-100 ${
                      location.pathname === "/checkout"
                        ? "pointer-events-none no-underline"
                        : ""
                    }`}
          >
            {item.mainProduct?.name}
          </Link>
          {/* item and price */}
          <span className="whitespace-nowrap font-light">
            € {(item.totalPrice * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      {/* extra suplements if there are any ?? */}
      <span className="flex items-center pl-5 text-xs font-light italic line-clamp-2">
        {item.mainProduct?.ingridients}
      </span>
      {location?.pathname !== "/checkout" && (
        <div className="flex w-full flex-col items-start justify-between gap-4 py-2 pl-5 lg:flex-row lg:items-center">
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
                  <div className=" flex w-full items-center justify-between rounded-md bg-orange-300/20 px-2 py-1 font-semibold dark:bg-gray-500">
                    <p className="text-xs text-gray-500 line-clamp-2 dark:text-slate-50">
                      {item.notes}
                    </p>
                    <p>
                      <AiOutlineCloseCircle
                        className="text-xl text-red-500 hover:cursor-pointer"
                        onClick={() => removeNote(item.id)}
                      />
                    </p>
                  </div>
                  {location?.pathname !== "/checkout" && (
                    <div>
                      <button
                        onClick={() => setShowNoteForm(true)}
                        className="py-2 text-sm underline hover:no-underline"
                      >
                        Edit note
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="flex w-20 gap-2 px-2 text-base">
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
              className="flex w-full flex-col gap-2"
            >
              <textarea
                onChange={(e) => setNote(e.target.value)}
                defaultValue={item.notes}
                className="rounded-lg bg-gray-200 p-1 text-xs outline-none dark:text-black"
              />
              <button
                className="w-1/3 self-end rounded-lg bg-orange-500 px-4 py-[0.15em] text-slate-50"
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
