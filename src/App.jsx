import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produse from "./pages/Produse";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div>
			<Navigation/>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/produse' element={<Produse />} />
				<Route path='/*' element={<Home/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
