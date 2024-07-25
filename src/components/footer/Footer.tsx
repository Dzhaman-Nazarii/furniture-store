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
							<li className={css.footer_item}>About us</li>
							<li className={css.footer_item}>Partners</li>
							<li className={css.footer_item}>Question/Answer</li>
							<li className={css.footer_item}>News</li>
							<li className={css.footer_item}>Reviews</li>
							<li className={css.footer_item}>Contacts</li>
						</ul>
					</nav>
				</div>
				<div className={css.footer_container}>
					<h3 className={css.footer_title}>Information</h3>
					<nav className={css.footer_nav}>
						<ul className={css.footer_list}>
							<li className={css.footer_item}>
								Exchange and return
							</li>
							<li className={css.footer_item}>Privacy Policy</li>
							<li className={css.footer_item}>Advantages</li>
							<li className={css.footer_item}>Delivery</li>
							<li className={css.footer_item}>Guarantees</li>
							<li className={css.footer_item}>Payment</li>
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
									<a href="https://www.instagram.com/dzhaman_1119/" target="_blank ">
										<img
											src={instagramSvg}
											alt="instagram"
										/>
									</a>
								</li>
								<li className={css.footer_app}>
									<a href="https://t.me/dzhaman_1119" target="_blank ">
										<img
											src={telegramSvg}
											alt="telegram"
										/>
									</a>
								</li>
								<li className={css.footer_app}>
									<a href="https://www.facebook.com/share/vadB5d1aGgwSpQPA/?mibextid=LQQJ4d" target="_blank ">
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
