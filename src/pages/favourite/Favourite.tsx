import { FC } from "react";
import { useFavourites } from "../../context/FavouritesContext";
import { IProduct } from "../../products";
import { Card } from "../../components/card/Card";
import css from "./Favourite.module.css";

export const Favourite: FC = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      {favourites.length === 0 ? (
        <h1 className={css.favourites_title}>Your favourite list is empty. Add some products to it!</h1>
      ) : (
        <ul className={css.favourites_list}>
          {favourites.map((product: IProduct) => (
            <li key={product.id} className={css.favourites_item}>
              <Card
                id={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
                width={product.width}
                height={product.height}
                length={product.length}
                isFavourite={true}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};