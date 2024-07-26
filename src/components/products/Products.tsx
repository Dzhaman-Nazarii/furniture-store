import { FC } from "react";
import { Card } from "../card/Card";
import { products } from "../../products";
import css from "./Products.module.css";
import { useFavourites } from "../../context/FavouritesContext";

export const Products: FC = () => {
  const { favourites } = useFavourites();

  return (
    <ul className={css.products_list}>
      {products.map((product) => (
        <li key={product.id} className={css.products_item}>
          <Card
            {...product}
            isFavourite={favourites.some(fav => fav.id === product.id)}
          />
        </li>
      ))}
    </ul>
  );
};