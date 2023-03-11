type Props = {};
import MenuItemList from "../components/MenuItems/MenuItemList";
import TopSection from "../components/TopSection/TopSection";

const Home = (props: Props) => {
  return (
    <div className="w-full">
      <TopSection />
      <MenuItemList />
    </div>
  );
};

export default Home;
