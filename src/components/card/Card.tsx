import { FC, MouseEventHandler } from "react";
import { IProduct } from "../../products";
import css from "./Card.module.css";
import heartSvg from "../../svg/heart.svg";
import basketSvg from "../../svg/basket.svg";
import { useFavourites } from "../../context/FavouritesContext";

interface CardProps extends IProduct {
  isFavourite: boolean;
}

export const Card: FC<CardProps> = ({ id, title, img, desc, price, isFavourite }) => {
  const { addFavourite, removeFavourite } = useFavourites();

  const handleFavouriteClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.stopPropagation();
    if (isFavourite) {
      removeFavourite(id);
    } else {
      addFavourite({ id, title, img, desc, price });
    }
  };

  return (
    <div className={css.card}>
      <img className={css.card_img} src={img} alt={title} />
      <div className={css.card_container}>
        <h2 className={css.card_title}>{title}</h2>
        <p className={css.card_desc}>{desc}</p>
        <ul className={css.card_icons}>
          <li>
            <b className={css.card_price}>{price}$</b>
          </li>
          <li className={css.card_icon} onClick={handleFavouriteClick}>
            <img
              src={heartSvg}
              alt="heart"
              className={isFavourite ? css.favourite_active : css.favourite_inactive}
            />
          </li>
          <li className={css.card_icon}>
            <img src={basketSvg} alt="basket" />
          </li>
        </ul>
      </div>
    </div>
  );
};