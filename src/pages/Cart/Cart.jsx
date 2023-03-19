import { useContext, useEffect, useState } from "react";
import { Button } from "bootstrap";
import { CartContext } from "../../context/Context";
import "./Cart.style.css";
import cartbg from "../../assets/cart_bg.jpg";
import { Link } from "react-router-dom";
import cancel from "../../assets/cancel.png";

function Cart() {
	const GlobalState = useContext(CartContext);
	const state = GlobalState.state;
	const dispatch = GlobalState.dispatch;

	const total = state.reduce((total, product) => {
		return Math.round(total + product.price * product.quantity);
	}, 0);
	return (
		<>
			{" "}
			<div className='body'>
				<section className='section_bg'>
					<div className='banner_hero'>
						<img src={cartbg} alt='cabinet with bass' className='cart_bg' />
						<h2 className='cartbg_title'>Cart</h2>
						<Link to={"/home"} className='link_cart_home'>
							Home /{" "}
						</Link>
						<Link to={"/produse"} className='link_cart_produse'>
							Produse
						</Link>
					</div>
				</section>
				<h3 className='your_Cart'>Your Cart</h3>
				<div className='cart'>
					{state.map((product, index) => {
						return (
							<div className='cart_card' key={index}>
								<img
									src={product.image}
									alt='product_image'
									className='cart_img'
								/>
								<p className='cart_prodtitle'>{product.title}</p>
								<div className='quantity'>
									<button
										className='cart_buttons'
										onClick={() =>
											dispatch({ type: "INCREASE", payload: product })
										}>
										+
									</button>
									<p className='product_quantity'>{product.quantity}</p>
									<button
										className='cart_buttons'
										onClick={() => {
											if (product.quantity > 1) {
												dispatch({ type: "DECREASE", payload: product });
											} else {
												dispatch({ type: "REMOVE", payload: product });
											}
										}}>
										-
									</button>
								</div>
								<p className='cart_prodprice'>
									${product.quantity * product.price}
								</p>
								<img
									src={cancel}
									alt='cancel img'
									className='cancel_button'
									onClick={() => dispatch({ type: "REMOVE", payload: product })}
								/>
							</div>
						);
					})}
					{state.length > 0 && (
						<div className="amount">
							<h2 className="amount_title">Total Amount: ${total}</h2>
							<button className="amount_btn">Checkout</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
