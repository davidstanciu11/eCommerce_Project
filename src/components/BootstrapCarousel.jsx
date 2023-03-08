import Carousel from "react-bootstrap/Carousel";
import cabinet from "../../assets/cabinet.jpg";
import chair from "../../assets/chair.jpg";
import sofa from "../../assets/sofa.jpg";
import "./BootstrapCarousel.css";

function DarkVariant() {
	return (
		<Carousel variant='dark'>
			<Carousel.Item><div id="imges"><img className='show_pics' src={sofa} alt='First slide' /></div>
				
				<Carousel.Caption>
					<h5>First slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='show_pics' src={cabinet} alt='Second slide' />
				<Carousel.Caption>
					<h5>Second slide label</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='show_pics' src={chair} alt='Third slide' />
				<Carousel.Caption>
					<h5>Third slide label</h5>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default DarkVariant;
