import { useState, useEffect } from "react";
import ProductsCards from "../components/ProductsCards";
import { Spinner, Row, Input } from "reactstrap";
import "./Produse.style.css";

function Produse() {
	const [productsList, setProductsList] = useState(null);
	const [categoriesList, setCategoryList] = useState(null);

	const [searchInput, setSearchInput] = useState("");
	const [filterProducts, setFilterProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((productsListAPI) => setProductsList(productsListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryAPI) => setCategoryList(categoryAPI));
	}, []);

	return (
		<>
			{productsList && categoriesList ? (
				<>
					<div className='produse_page'>
						<div className='filter_section'>
							<h2 className='categories_title'>Product Categories</h2>
							<h4
								className='category_ti'
								onClick={() => {
									setFilterProducts(null);
								}}>
								All Products
							</h4>
							{categoriesList.map((product, index) => {
								return (
									<h4
										className='category_ti'
										key={"product_" + index}
										onClick={() => {
											setFilterProducts(product);
										}}>
										{product}
									</h4>
								);
							})}
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
										return (
											filterProducts === null ||
											filterProducts === product.category
										);
									})
									.filter((product) => {
										return product.title
											.toLowerCase()
											.includes(searchInput.toLowerCase());
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
				<div className="spinner"><Spinner></Spinner></div>
			)}
		</>
	);
}

export default Produse;
