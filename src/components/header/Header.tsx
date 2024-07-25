import { FC } from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";
import basketSvg from "../../svg/basket.svg";
import { Search } from "../search/Search";
import profileSvg from "../../svg/profile.svg"
import favouriteSvg from "../../svg/favourite.svg"
import logoImg from "../../img/logo.png";
import { Catalogue } from "../catalogue/Catalogue";

export const Header: FC = () => {
	return (
		<div className={css.header_content}>
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
				<Catalogue />
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
	);
};
