import "./Footer.style.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";

function Footer() {
	return (
		<div className='footer'>
			<div className='desc_company'>
				<div className='links'>
					<Link id='footer_top' className='footer_li' to={"/home"}>
						Home{" "}
					</Link>
					<span>
						-
						<Link className='footer_li' to={"/produse"}>
							{" "}
							Produse
						</Link>
					</span>
				</div>
				<h3 id='company'>OutStock &#169; 2015</h3>
			</div>
			<div className='logos'>
				<img className='profile_logos' src={facebook} alt='facebook' />
				<img className='profile_logos' src={instagram} alt='instagram' />
				<img className='profile_logos' src={twitter} alt='twitter' />
				<img className='profile_logos' src={github} alt='github' />
			</div>
		</div>
	);
}

export default Footer;
