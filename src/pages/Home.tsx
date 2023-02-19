type Props = {};
import { Link } from "react-router-dom";
import { useCart } from "../context/cartStore";
const Home = (props: Props) => {
  const addToCart = useCart((state) => state.addItems);
  return (
    <div className="h-screen w-full">
      <section id="welcome" className="bg-red-500 h-full">
        page 1<button onClick={() => addToCart("item")}>Add</button>
      </section>
      <section id="items" className="bg-yellow-500 h-full">
        page 2<button onClick={() => addToCart("item")}>Add</button>
        <Link to="/nutritions" className="text-xl ml-10">
          i
        </Link>
      </section>
    </div>
  );
};

export default Home;
