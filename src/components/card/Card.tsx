import { FC, MouseEventHandler } from "react";
import { IProduct } from "../../products";
import css from "./Card.module.css";
import heartSvg from "../../svg/heart.svg";
import heartActiveSvg from "../../svg/heartActive.svg";
import addToBasketSvg from "../../svg/addToBasket.svg";
import removeFromBasketSvg from "../../svg/removeFromBasket.svg";
import { useFavourites } from "../../context/FavouritesContext";
import { useBasket } from "../../context/BasketContext";

interface CardProps extends IProduct {
	isFavourite?: boolean;
	isBasket?: boolean;
}

export const Card: FC<CardProps> = ({
	id,
	title,
	img,
	price,
	width,
	height,
	length,
	isFavourite,
	isBasket,
}) => {
	const { addFavourite, removeFavourite } = useFavourites();
	const { addToBasket, removeFromBasket } = useBasket();

	const handleFavouriteClick: MouseEventHandler<HTMLLIElement> = (event) => {
		event.stopPropagation();
		if (isFavourite) {
			removeFavourite(id);
		} else {
			addFavourite({ id, title, img, price, width, height, length });
		}
	};

	const handleBasketClick: MouseEventHandler<HTMLLIElement> = (event) => {
		event.stopPropagation();
		if (isBasket) {
			removeFromBasket(id);
		} else {
			addToBasket({ id, title, img, price, width, height, length });
		}
	};

	return (
		<div className={css.card}>
			<img
				className={css.card_img}
				src={img}
				alt={title}
			/>
			<div className={css.card_container}>
				<h2 className={css.card_title}>{title}</h2>
				<div className={css.card_sizes}>
					<div className={css.card_dimension}>
						<span>Width</span>
						<span>{width}.0cm</span>
					</div>
					<div className={css.card_dimension}>
						<span>Height</span>
						<span>{height}.0cm</span>
					</div>
					<div className={css.card_dimension}>
						<span>Length</span>
						<span>{length}.0cm</span>
					</div>
				</div>
				<ul className={css.card_icons}>
					<li>
						<b className={css.card_price}>{price}$</b>
					</li>
					<li
						className={css.card_icon}
						onClick={handleFavouriteClick}>
						<img
							src={isFavourite ? heartActiveSvg : heartSvg}
							alt="heart"
						/>
					</li>
					<li
						className={css.card_icon}
						onClick={handleBasketClick}>
						<img
							src={
								isBasket ? removeFromBasketSvg : addToBasketSvg
							}
							alt="basket"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};
