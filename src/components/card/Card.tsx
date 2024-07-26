import { FC, MouseEventHandler } from "react";
import { IProduct } from "../../products";
import css from "./Card.module.css";
import heartSvg from "../../svg/heart.svg";
import basketSvg from "../../svg/basket.svg";
import { useFavourites } from "../../context/FavouritesContext";
import { useBasket } from "../../context/BasketContext";

interface CardProps extends IProduct {
  isFavourite?: boolean;
  isBasket?: boolean;
}

export const Card: FC<CardProps> = ({ id, title, img, desc, price, isFavourite, isBasket }) => {
  const { addFavourite, removeFavourite } = useFavourites();
  const {addToBasket, removeFromBasket} = useBasket();

  const handleFavouriteClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.stopPropagation();
    if (isFavourite) {
      removeFavourite(id);
    } else {
      addFavourite({ id, title, img, desc, price });
    }
  };

  const handleBasketClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.stopPropagation();
    if(isBasket) {
      removeFromBasket(id)
    } else {
      addToBasket({ id, title, img, desc, price });
    }
  }

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
          <li className={css.card_icon} onClick={handleBasketClick}>
            <img src={basketSvg} alt="basket" className={isBasket ? css.basket_active : css.basket_inactive} />
          </li>
        </ul>
      </div>
    </div>
  );
};