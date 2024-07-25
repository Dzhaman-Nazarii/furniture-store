import { FC } from "react";
import { IData } from "../../data";
import css from "./Card.module.css";
import heartSvg from "../../svg/heart.svg";
import basketSvg from "../../svg/basket.svg";

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
				<ul className={css.card_icons}>
					<li>
						<b className={css.card_price}>{price}$</b>
					</li>
					<li className={css.card_icon}>
						<img
							src={basketSvg}
							alt="basket"
						/>
					</li>
					<li className={css.card_icon}>
						<img
							src={heartSvg}
							alt="heart"
						/>
					</li>
				</ul>
			</div>
		</>
	);
};
