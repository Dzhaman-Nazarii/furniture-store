import { FC } from "react";
import css from './Products.module.css';
import { Card } from "../card/Card";
import { data } from "../../data";

export const Products: FC = () => {
	return (
			<ul className={css.products_list}>
				{data.map((product) => (
					<li key={product.id} className={css.products_item}>
						<Card {...product} />
					</li>
				))}
			</ul>
	);
};
