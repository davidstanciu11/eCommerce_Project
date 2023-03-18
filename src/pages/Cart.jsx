import { useContext, useEffect, useState } from "react";
import { Button } from "bootstrap";
import { CartContext } from "../context/Context";
import "./Cart.style.css"

function Cart() {
	const GlobalState = useContext(CartContext);
	const state = GlobalState.state;
	const dispatch = GlobalState.dispatch;
	return (
		<>
			<div className='cart'>
				{state.map((product, index) => {
					return (
						<div className='card' key={index}>
							<img src={product.image} alt='product_image' className="cart_img" />
							<p>{product.title}</p>
							<p>{product.quantity * product.price}</p>
							<div className='quantity'>
								<button>+</button>
								<p>{product.quantity}</p>
								<button>-</button>
							</div>
                            <h2>X</h2>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Cart;
