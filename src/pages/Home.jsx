import Navigation from "../components/Navigation";
import DarkVariant from "../components/BootstrapCarousel";
import CardsCategories from "../components/CardsCategories";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
	return (
		<>
			<Navigation />
			<DarkVariant />
			<CardsCategories />
			<TrendingProducts />
		</>
	);
}

export default Home;
