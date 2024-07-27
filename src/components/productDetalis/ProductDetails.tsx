import React from "react";
import css from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../products";

export const ProductDetails: React.FC = () => {
	const { productId } = useParams<{ productId: string }>();
	const product = products.find((p) => p.id === productId);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className={css.details_card}>
			<div>
				<h1 className={css.details_title}>{product.title}</h1>
				<img
					className={css.details_img}
					src={product.img}
					alt={product.title}
				/>
			</div>
			<div className={css.details_container}>
				<h3 className={css.details_information}>Descrpition</h3>
				<p className={css.details_content}>{product.desc}</p>
			</div>
			<div className={css.details_container}>
				<h3 className={css.details_information}>Delivery</h3>
				<p className={css.details_content}>{product.delivery}</p>
			</div>
			<div className={css.details_container}>
				<h3 className={css.details_information}>Payment</h3>
				<p className={css.details_content}>{product.payment}</p>
			</div>
		</div>
	);
};
