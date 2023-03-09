import Carousel from "react-bootstrap/Carousel";
import cabinet from "../../assets/cabinet.jpg";
import chair from "../../assets/chair.webp";
import sofa from "../../assets/sofa.jpg";
import "./BootstrapCarousel.css";
import { Button } from "bootstrap";

function DarkVariant() {
	return (
		<Carousel variant='dark' className='carousel'>
			<Carousel.Item>
				<img className='show_pics' src={sofa} alt='First slide' />
				<Carousel.Caption>
					<h5 className='title_product'>Brown Leather Sofa</h5>
					<p className='description_product'>Newest Collection &#169; 2023</p>
					<button type='button' class='btn btn-outline-light' id='button'>
						Discover
					</button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='show_pics' src={cabinet} alt='Second slide' />
				<Carousel.Caption className='caption_1'>
					<h5 className='title_product1'>Kitchen Set</h5>
					<p className='description_prodcut1'>Newest Collection &#169; 2023</p>
					<button type='button' class='btn btn-outline-dark' id='button_1'>
						Discover
					</button>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='show_pics' src={chair} alt='Third slide' />
				<Carousel.Caption>
					<h5 id="title_3">Mugler Chair</h5>
					<p id="caption_3">Newest Collection &#169; 2023</p>
					<button type='button' class='btn btn-outline-dark' id='button_2'>
						Discover
					</button>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default DarkVariant;
