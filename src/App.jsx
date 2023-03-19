import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Produse from "./pages/Produse/Produse";
import Cart from "./pages/Cart/Cart";
import Navigation from "././components/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/produse' element={<Produse />} />
				<Route path='/*' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
