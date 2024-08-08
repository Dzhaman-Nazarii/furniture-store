import { FC } from "react";
import css from "./Basket.module.css";
import { useBasket } from "../../context/BasketContext";
import { IProduct } from "../../products";
import { Card } from "../../components/card/Card";

export const Basket: FC = () => {
	const { basket } = useBasket();
	return (
		<div>
			{basket.length === 0 ? (
				<h1 className={css.basket_title}>Your basket is empty. Add some products to it!</h1>
			) : (
				<ul className={css.basket_list}>
					{basket.map((product: IProduct) => (
						<li
							key={product.id}
							className={css.basket_item}>
							<Card
								id={product.id}
								title={product.title}
								img={product.img}
								price={product.price}
								width={product.width}
								height={product.height}
								length={product.length}
								isBasket={true}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
