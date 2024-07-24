import { FC } from "react";
import css from "./Footer.module.css";
import instagramSvg from "../../img/instagram.svg";
import telegramSvg from "../../img/telegram.svg";
import facebookSvg from "../../img/facebook.svg";

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
						<ul className={css.footer_social}>
							<li className={css.footer_app}>
								<a href="https://www.instagram.com/dzhaman_1119/">
									<img
										src={instagramSvg}
										alt="instagram"
									/>
								</a>
							</li>
							<li className={css.footer_app}>
								<a href="https://t.me/dzhaman_1119">
									<img
										src={telegramSvg}
										alt="telegram"
									/>
								</a>
							</li>
							<li className={css.footer_app}>
								<a href="https://t.me/dzhaman_1119">
									<img
										src={facebookSvg}
										alt="facebook"
									/>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className={css.footer_bottom}>
				<p className={css.footer_copy}>&copy; Home Staff | 2024</p>
			</div>
		</>
	);
};
