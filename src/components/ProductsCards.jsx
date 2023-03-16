import "./ProductCards.style.css";
import { Link } from "react-router-dom";

function ProductsCards({ product }) {
	const addToWishlist = () => {
		const productsEl = localStorage.getItem("produs");

		if (productsEl !== null) {
			const products = JSON.parse(productsEl);

			const existNr = products.find((prod) => {
				return prod.id === product.id;
			});

			if (existNr === undefined) {
				products.push(product);
			}

			localStorage.setItem("produs", JSON.stringify(products));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("produs", JSON.stringify(newProducts));
		}
	}


	return (
		<div className='col'>
			<div className='card'>
				<img
					src={product.image}
					alt='products images'
					className='cards_photos'
				/>
				<div className='bg'>
					<h2 className='product_title'>{product.title}</h2>
					<p className='product_desc'>${product.price}</p>
					<Link to={"/produse"}>
						<button
							type='button'
							className='btn btn-outline-dark'
							id='product_button'>
							Find Out
						</button>
						<button
							type='button'
							className='btn btn-outline-dark btn_2'
							id='product_button'
							onClick={addToWishlist()}>
							Wishlist
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProductsCards;
