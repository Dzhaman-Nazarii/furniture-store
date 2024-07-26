import { FC } from "react";
import { Card } from "../card/Card";
import { products } from "../../products";
import css from "./Products.module.css";
import { useFavourites } from "../../context/FavouritesContext";
import { useBasket } from "../../context/BasketContext";

export const Products: FC = () => {
  const { favourites } = useFavourites();
  const {basket} = useBasket();

  return (
    <ul className={css.products_list}>
      {products.map((product) => (
        <li key={product.id} className={css.products_item}>
          <Card
            {...product}
            isFavourite={favourites.some(fav => fav.id === product.id)}
            isBasket={basket.some(bask => bask.id === product.id)}
          />
        </li>
      ))}
    </ul>
  );
};