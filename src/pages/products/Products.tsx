import { FC } from "react";
import { Card } from "../../components/card/Card";
import { products } from "../../products";
import css from "./Products.module.css";
import { useFavourites } from "../../context/FavouritesContext";
import { useBasket } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

export const Products: FC = () => {
  const { favourites } = useFavourites();
  const { basket } = useBasket();
  const { searchValue } = useSearch();
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <ul className={css.products_list}>
      {filteredProducts.map((product) => (
        <li key={product.id} className={css.products_item} onClick={() => handleProductClick(product.id)}>
          <Card
            {...product}
            isFavourite={favourites.some((fav) => fav.id === product.id)}
            isBasket={basket.some((bask) => bask.id === product.id)}
          />
        </li>
      ))}
    </ul>
  );
};