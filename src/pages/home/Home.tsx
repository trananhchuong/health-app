import ListFood from "../../components/foods/ListFood";
import HeroImageSection from "../../components/home/HeroImageSection";
import LoadMoreButton from "../../components/loadMore/LoadMoreButton";
import ListMealComponent from "../../components/meal/ListMealComponent";
import { HomeContainer } from "./HomeStyled";

Home.propTypes = {};

function Home() {
  return (
    <HomeContainer>
      <HeroImageSection />
      <ListMealComponent />
      <ListFood />
      <LoadMoreButton />
    </HomeContainer>
  );
}

export default Home;
