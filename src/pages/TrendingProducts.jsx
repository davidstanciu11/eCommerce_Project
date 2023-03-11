import { useState, useEffect } from "react";
import { Spinner, Row } from "reactstrap";
import "./TrendingProducts.style.css";
import ProductsCards from "../components/ProductsCards";

function TrendingProducts() {
	const [productsList, setProductsList] = useState(null);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((productsListAPI) => setProductsList(productsListAPI));
	}, []);

	return (
		<>
			{productsList ? (
				<>
					<div className='description'>
						<h2 id='title_trending'>Trending Products</h2>
						<p id='par_trending'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Quibusdam adipisci voluptatibus nihil libero magni expedita.
						</p>
					</div>
					<Row lg='4' className='row'>
						{productsList.map((product, index) => {
							return (
								<ProductsCards product={product} key={"product_" + index} />
							);
						})}
					</Row>
				</>
			) : (
				<Spinner className="spinner"></Spinner>
			)}
		</>
	);
}

export default TrendingProducts;
