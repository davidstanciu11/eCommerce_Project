import "./TrendingProducts.style.css";
import { Col } from "reactstrap";
import ProductsData from "./ProductsImages";

function ProductsCards({ product }) {
	return (
		<Col className='mt-4'>
			<div className='card'>
				{ProductsData.map((data,key) => {
                    return (
                        <div
              key={key}
              style={{
                backgroundImage: `url(${data.bgUrl})`,
              }}
            ></div>
                )})}
				<h2 className='product_title'>{product.title}</h2>
				<p>${product.price}</p>
			</div>
		</Col>
	);
}

export default ProductsCards;
