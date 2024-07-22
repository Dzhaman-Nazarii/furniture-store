import { FC } from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
	return (
		<header>
			<div className={css.header_menu}>
				<span className={css.header_logo}>House Staff</span>
				<nav className={css.header_nav}>
					<Link className={css.header_link} to="/" >Home</Link>
					<Link className={css.header_link} to="/contacts" >Contacts</Link>
					<Link className={css.header_link} to="/basket" >Basket</Link>
				</nav>
			</div>
			<div className={css.header_presentation}></div>
		</header>
	);
};
