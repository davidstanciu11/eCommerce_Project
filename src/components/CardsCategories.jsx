import { Link } from "react-router-dom";
import coffee_table from "../../assets/coffee_table.webp";
import people from "../../assets/people.jpg";
import storage from "../../assets/storage.jpg";
import "./CardsCategories.style.css";

function CardsCategories() {
	return (
		<>
			{" "}
			<div className='flex'>
				<div className='card'>
					<div className='text'>
						<h2>Customers Love</h2>
						<Link to={"/produse"} className="links">Discover Now</Link>
					</div>
					<div className='image'>
						<img src={coffee_table} alt='coffee table' className='card_img' />
					</div>
				</div>
				<div className='card'>
					<div className='text'>
						<h2>Latest Finds</h2>
						<Link to={"/produse"} className="links">Discover Now</Link>
					</div>
					<div className='image'>
						<img src={storage} alt='storage' className='card_img card_img1' />
					</div>
				</div>
				<div className='card'>
					<div className='text'>
						<h2>Classic Pieces</h2>
						<Link to={"/produse"} className="links">Discover Now</Link>
					</div>
					<div className='image'>
						<img src={people} alt='coffee table' className='card_img' />
					</div>
				</div>
			</div>
		</>
	);
}

export default CardsCategories;
