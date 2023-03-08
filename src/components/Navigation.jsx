import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
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
				<Link className='nav_li' to={"/wishlist"}>
					Wishlist <span id='orders'>(0)</span>
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
