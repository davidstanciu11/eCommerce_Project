import { useState, useEffect, useContext } from "react";
import ProductsCards from "../../components/ProductsCards";
import { Spinner, Row, Input } from "reactstrap";
import "./Produse.style.css";
import { CartContext } from "../../context/Context";
import Footer from "../../components/Footer";

function Produse() {
	const GlobalState = useContext(CartContext);
	const dispatch = GlobalState.dispatch;
	
	const [productsList, setProductsList] = useState(null);
	const [categoriesList, setCategoryList] = useState(null);

	const [searchInput, setSearchInput] = useState("");
	const [filterProducts, setFilterProducts] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=20")
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
										product.quantity = 1;
										return (
											<>
												<div className='col' key={"product_" + index}>
													<div className='card'>
														<img
															src={product.image}
															alt='products images'
															className='cards_photos'
														/>
														<div className='bg'>
															<h2 className='product_title'>{product.title}</h2>
															<p className='product_desc'>${product.price}</p>
															<button
																type='button'
																className='btn btn-outline-dark'
																id='product_button'
																onClick={() =>
																	dispatch({ type: "ADD", payload: product })
																}>
																Add To Cart
															</button>
															{/* <button
															type='button'
															className='btn btn-outline-dark btn_2'
															id='product_button'
															onClick={addToCart()}>
															Find Out
															</button> */}
														</div>
													</div>
												</div>
											</>
										);
									})}
							</Row>
						</div>
					</div>
				</>
			) : (
				<div className='spinner'>
					<Spinner></Spinner>
				</div>
			)}
			<Footer />
		</>
	);
}

export default Produse;
