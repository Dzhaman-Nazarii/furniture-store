import { FC } from "react";
import css from "./Basket.module.css";
import { useBasket } from "../../context/BasketContext";
import { IProduct } from "../../products";
import { Card } from "../../components/card/Card";

export const Basket: FC = () => {
	const { basket } = useBasket();
	return (
		<div>
			<h1>Basket</h1>
			{basket.length === 0 ? (
				<p>Absent</p>
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
								depth={product.depth}
								isBasket={true}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
