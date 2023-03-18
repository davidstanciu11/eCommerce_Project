import "./ProductCards.style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Context";

function ProductsCards({ product }) {
	
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
						<Link to={"/produse"}><button
							type='button'
							className='btn btn-outline-dark'
							id='product_button'
							>
							Find Out
						</button></Link>
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
	);
}

export default ProductsCards;
