import { useState, FC } from "react";
import css from "./Catalog.module.css";

export const Catalogue: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`${css.catalogue} ${isOpen ? css.open : ""}`} onClick={toggleMenu} >
			<div
				className={css.catalogue_content}
				>
				<span>
					<i className={`${css.catalogue_icon} ${isOpen ? css.open : ""}`}></i>
					Catalogue
				</span>
			</div>
			<div className={`${css.dropdown_menu} ${isOpen ? css.open : ""}`}>
				<ul>
					<li>Chair</li>
					<li>Bed</li>
					<li>Sofa</li>
					<li>Chair</li>
					<li>Bed</li>
					<li>Sofa</li>
					<li>Chair</li>
					<li>Bed</li>
					<li>Sofa</li>
				</ul>
			</div>
		</div>
	);
};
