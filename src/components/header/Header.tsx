import { FC } from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import basketSvg from "../../img/basket.svg";
import { Search } from "../search/Search";
import profileSvg from "../../img/profile.svg";
import favouriteSvg from "../../img/favourite.svg";
import logoImg from "../../img/logo.png";

export const Header: FC = () => {
	return (
		<header>
			<div className={css.header_menu}>
				<div className={css.header_logotype}>
					<img
						className={css.header_logo}
						src={logoImg}
						alt="logo"
					/>
					<Link
						to="/"
						className={css.header_title}>
						ouse Staff{" "}
					</Link>
				</div>
				<Search />
				<nav className={css.header_nav}>
					<Link
						className={css.header_link}
						to="/favourite">
						<img
							className={css.header_icon}
							src={favouriteSvg}
							alt="favourite"
						/>
					</Link>

					<Link
						className={css.header_link}
						to="/profile">
						<img
							className={css.header_icon}
							src={profileSvg}
							alt="profile"
						/>
					</Link>

					<Link
						className={css.header_link}
						to="/basket">
						<img
							className={css.header_icon}
							src={basketSvg}
							alt="basket"
						/>
					</Link>
				</nav>
			</div>
			<div className={css.header_presentation}></div>
		</header>
	);
};
