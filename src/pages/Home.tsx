type Props = {};
import { Link } from "react-router-dom";
import CartButton from "../components/CartButton";
import MenuItemList from "../components/MenuItems/MenuItemList";
import { useCart } from "../context/cartStore";
const Home = (props: Props) => {
  const addToCart = useCart((state) => state.addItems);
  return (
    <div className="h-screen w-full">
      <section id="items" className="h-full bg-slate-100 dark:bg-gray-700">
        <MenuItemList />
      </section>
    </div>
  );
};

export default Home;
