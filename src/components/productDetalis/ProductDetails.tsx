import React from "react";
import css from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../products";

export const ProductDetails: React.FC = () => {
	const { productId } = useParams<{ productId: string }>();
	const product = products.find((p) => p.id === productId);

	if (!product) {
		return <h1>Product not found</h1>;
	}

	return (
		<div className={css.details_container}>
			<h1 className={css.details_title}>{product.title}</h1>
			<div className={css.details_content}>
				<img
					className={css.details_img}
					src={product.img}
					alt={product.title}
				/>
				<div className={css.details_column}>
					<p className={css.details_code}>Product code: HS{product.id}</p>
					<h3 className={css.details_price}>{product.price}$</h3>
					<button className={css.details_basket}>Add to basket</button>
					<div className={css.details_sizes}>
						<div className={css.details_dimension}>
							<b>Width:</b>
							<span>{product.width}.0cm</span>
						</div>
						<div className={css.details_dimension}>
							<b>Height:</b>
							<span>{product.height}.0cm</span>
						</div>
						<div className={css.details_dimension}>
							<b>Depth:</b>
							<span>{product.depth}.0cm</span>
						</div>
					</div>
					<p><b>Factory:</b> House Staff</p>
					<p><b>Style: </b> {product.style}</p>
					<p><b>Material: </b>{product.material}</p>
					<p><b>Payment: </b>{product.payment}</p>
					<p><b>Delivery: </b>{product.delivery}</p>
				</div>
			</div>
		</div>
	);
};
