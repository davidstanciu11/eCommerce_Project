import { useState, useEffect } from "react";
import ProductsCards from "../components/ProductsCards";
import { Spinner, Row, Input } from "reactstrap";
import "./Produse.style.css";

function Produse() {
	const [productsList, setProductsList] = useState(null);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((productsListAPI) => setProductsList(productsListAPI));
	}, []);
		
	return (
		<>
			{productsList ? (
				<>
					<div className='produse_page'>
						<div className='filter_section'>
							<h2 className='categories_title'>Product Categories</h2>
							<h4 className='filter_categories'>Accesories</h4>
							<h4 className='filter_categories'>Fashion</h4>
							<h4 className='filter_categories'>Jewellery</h4>
						</div>
						<div className='products_section'>
							<Input
								className='searchbar'
								id='search'
								placeholder='Search'
								value={searchInput}
								onChange={(event) => {
									setSearchInput(event.target.value);
								}}
							/>
							<Row className='row'>
								{productsList
									.filter((product) => {
										return product.title.includes(searchInput);
									})
									.map((product, index) => {
										return (
											<ProductsCards
												product={product}
												key={"product_" + index}
											/>
										);
									})}
							</Row>
						</div>
					</div>
				</>
			) : (
				<Spinner className='spinner'></Spinner>
			)}
		</>
	);
}

export default Produse;
