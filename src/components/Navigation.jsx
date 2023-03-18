import { Link } from "react-router-dom";
import "./Navigation.css";
import cart from "./../assets/shopping_cart.png";

function Navigation() {
	// const arrayFromStorage = JSON.parse(localStorage.getItem("produs"));
	// const arrayLength = arrayFromStorage.length;

	return (
		<div className='navbar'>
			<div className='first_part'>
				<Link className='nav_li' to={"/home"}>
					Home
				</Link>
				<Link id='product' className='nav_li' to={"/produse"}>
					Produse
				</Link>
			</div>
			<div>
				<h1 id='title'>OutStock&#8482;</h1>
			</div>
			<div className='second_part'>
				<Link className='nav_li' to={"/cart"}>
					Cart <span> <img src={cart} alt="shopping cart" className="shopping_cart"/></span> 
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
