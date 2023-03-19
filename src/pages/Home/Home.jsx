import DarkVariant from "../../components/BootstrapCarousel";
import CardsCategories from "../../components/CardsCategories";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Footer from "../../components/Footer";

function Home() {
	return (
		<>
			<DarkVariant />
			<CardsCategories />
			<TrendingProducts />
			<Footer/>
		</>
	);
}

export default Home;
