import { FC } from "react";
import css from "./Footer.module.css";
import instagramSvg from "../../svg/instagram.svg";
import telegramSvg from "../../svg/telegram.svg";
import facebookSvg from "../../svg/facebook.svg";
import logotypeImg from "../../img/logotype.png";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
	return (
		<>
			<div className={css.footer_top}>
				<div className={css.footer_container}>
					<h3 className={css.footer_title}>Company</h3>
					<nav className={css.footer_nav}>
						<ul className={css.footer_list}>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/about">About us</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/partners">Partners</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/faq">Question/Answer</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/news">News</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/reviews">Reviews</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/contacts">Contacts</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className={css.footer_container}>
					<h3 className={css.footer_title}>Information</h3>
					<nav className={css.footer_nav}>
						<ul className={css.footer_list}>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/exchange-return">
									Exchange and return
								</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/privacy-policy">Privacy Policy</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/advantages">Advantages</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/delivery">Delivery</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/guarantees">Guarantees</Link>
							</li>
							<li className={css.footer_item}>
								<Link className={css.footer_link} to="/payment">Payment</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className={css.footer_container}>
					<nav className={css.footer_nav}>
						<ul className={css.footer_list}>
							<li className={css.footer_item}>
								Kyiv, Lviv, Ternopil
							</li>
							<li className={css.footer_item}>
								<a
									className={css.footer_phone}
									href="tel:+380956380940">
									+380956380940
								</a>
							</li>
							<li className={css.footer_item}>
								<a
									className={css.footer_mail}
									href="mailto:dzhaman.nazar2003@gmail.com">
									dzhaman.nazar2003@gmail.com
								</a>
							</li>
						</ul>
						<div className={css.footer_social}>
							<ul className={css.footer_apps}>
								<li className={css.footer_app}>
									<a
										href="https://www.instagram.com/dzhaman_1119/"
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={instagramSvg}
											alt="instagram"
										/>
									</a>
								</li>
								<li className={css.footer_app}>
									<a
										href="https://t.me/dzhaman_1119"
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={telegramSvg}
											alt="telegram"
										/>
									</a>
								</li>
								<li className={css.footer_app}>
									<a
										href="https://www.facebook.com/share/vadB5d1aGgwSpQPA/?mibextid=LQQJ4d"
										target="_blank"
										rel="noopener noreferrer">
										<img
											src={facebookSvg}
											alt="facebook"
										/>
									</a>
								</li>
							</ul>
							<Link to={"/"}>
								<img
									className={css.footer_logotype}
									src={logotypeImg}
									alt="logotype"
								/>
							</Link>
						</div>
					</nav>
				</div>
			</div>
			<div className={css.footer_bottom}>
				<p className={css.footer_copy}>&copy; Home Staff | 2024</p>
			</div>
		</>
	);
};
