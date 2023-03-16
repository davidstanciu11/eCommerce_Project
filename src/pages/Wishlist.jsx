import { useEffect, useState } from "react";
import { Button } from "bootstrap";

function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        const productsEl = localStorage.getItem("produs");
        if(productsEl !== null){
            const products = JSON.parse(productsEl);
            setWishlistProducts(products);
        }
    }, []);

    const onDelete = (productID) => {
			const filtredList = wishlistProducts.filter((product) => product.id !== productID);
			localStorage.setItem("produs", JSON.stringify(filtredList));
			setWishlistProducts(filtredList);
		};

    return (
		<>
			<h2>Wishlist page</h2>
			<ul>
				{wishlistProducts.map((product, index) => {
					return (
                        
						<li key={"product_" + index} className='mt-2'>
							{product.title}
							<button
								color='danger'
								onClick={() => {
									onDelete(product.id);
								}}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Wishlist;
