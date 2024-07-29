import { FC } from "react";
import { useFavourites } from "../../context/FavouritesContext";
import { IProduct } from "../../products";
import { Card } from "../../components/card/Card";
import css from "./Favourite.module.css";

export const Favourite: FC = () => {
  const { favourites } = useFavourites();

  return (
    <div>
      <h1>Favourite</h1>
      {favourites.length === 0 ? (
        <p>Absent</p>
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