type Props = {};

import MenuItemList from "../components/MenuItems/MenuItemList";
import TopSection from "../components/TopSection/TopSection";
import MenuServices from "../api/services/menu.service";
import LoadingScreen from "../shared/components/UI-Elements/LoadingScreen";

const Home = (props: Props) => {
  const { data: restaurantMenuAndInfo, isLoading } = MenuServices.useMenu();
  const { data: products } = MenuServices.useProducts();

  // getMenu includes categories restaurant info and restaurant rating

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <TopSection
        name={restaurantMenuAndInfo?.restaurant?.name}
        rating={restaurantMenuAndInfo?.rating}
        reviews={restaurantMenuAndInfo?.restaurant?.reviews?.length}
        deliveryInfo={{
          averageTime: restaurantMenuAndInfo?.restaurant?.averageDeliveryTime,
          deliveryCost: restaurantMenuAndInfo?.restaurant?.deliveryCost,
          minCost: restaurantMenuAndInfo?.restaurant?.minDeliveryAmount,
        }}
        workingHours={{
          openingTime:
            restaurantMenuAndInfo?.restaurant?.operationTime.openingTime,
          closingTime:
            restaurantMenuAndInfo?.restaurant?.operationTime.closingTime,
        }}
        sections={restaurantMenuAndInfo?.categories?.map((cat) => cat.name)}
      />
      <MenuItemList
        popularProducts={products?.filter((prod) => prod.tag === "popular")}
        menu={restaurantMenuAndInfo?.categories}
      />
    </>
  );
};

export default Home;
