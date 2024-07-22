import { FC } from "react";
import { IData } from "../../data";
import css from "./Card.module.css";

export const Card: FC<IData> = ({ title, img, desc, price }) => {
	return (
		<>
			<img
				className={css.card_img}
				src={img}
				alt={title}
			/>
			<div className={css.card_container}>
				<h2 className={css.card_title}>{title}</h2>
				<p className={css.card_desc}>{desc}</p>
				<b className={css.card_price}>{price}$</b>
				<p className={css.card_basket}>+</p>
			</div>
		</>
	);
};
