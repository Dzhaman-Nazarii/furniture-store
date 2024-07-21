import { FC } from "react";
import css from './Header.module.css';

export const Header: FC = () => {
	return (
		<header>
			<div>
				<span className={css.header_logo}>House Staff</span>
				<ul className={css.header_list}>
					<li className={css.header_item}>About us</li>
					<li className={css.header_item}>Contacts</li>
					<li className={css.header_item}>Profile</li>
				</ul>
			</div>
			<div className={css.header_presentation}></div>
		</header>
	);
};
 