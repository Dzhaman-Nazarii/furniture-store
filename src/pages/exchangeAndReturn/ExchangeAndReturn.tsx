import { FC } from "react";
import css from "./ExchangeAndReturn.module.css";
import returnSvg from "../../svg/return.webp";

export const ExchangeAndReturn: FC = () => {
	return (
		<>
			<h1 className={css.exchange_header}>
				Exchange and return of goods
			</h1>
			<div className={css.exchange_box}>
				<div>
					<h2 className={css.exchange_title}>
						Product return and <br /> exchange guarantee
					</h2>
					<p className={css.exchange_description}>
						Everything can change in a year, <br /> even your
						opinion
					</p>
				</div>
				<img
					className={css.exchange_img}
					src={returnSvg}
					alt="return"
				/>
			</div>
			<div className={css.exchange_success}>
				<div>
					<h2 className={css.exchange_title}>
						Manufacturer's warranty <br /> up to 2 years
					</h2>
					<p className={css.exchange_description}>
						In order to return or exchange furniture, <br /> you
						must follow simple conditions:
					</p>
				</div>
				<ol className={css.exchange_success_list}>
					<li className={css.exchange_success_item}>
						The product to be returned / exchanged must be new, i.e.
						have no traces of use and use (scratches, chips,
						abrasions and other damages)
					</li>
					<li className={css.exchange_success_item}>
						The original factory packaging of the product and all
						its components have been preserved intact (traces of
						careful opening of the packaging for inspection of the
						product are allowed)
					</li>
					<li className={css.exchange_success_item}>
						The complete set of goods, labels, instructions, factory
						marking and product appearance are preserved
					</li>
					<li className={css.exchange_success_item}>
						There is a document confirming the purchase and payment
						of the product (for example, a sales receipt / invoice)
					</li>
				</ol>
			</div>
			<div className={css.exchange_failed}>
				<h2 className={css.exchange_failed_title}>
					Cannot be returned or exchanged
				</h2>
				<ol className={css.exchange_failed_list}>
					<li className={css.exchange_failed_item}>
						Goods of appropriate quality that have been used or have
						traces of use, signs of installation, assembly, etc.
					</li>
					<li className={css.exchange_failed_item}>
						Goods that have lost their appearance, in which the
						packaging, labels, markings, etc. are broken. after
						handing over the goods to the Buyer
					</li>
					<li className={css.exchange_failed_item}>
						The goods have visible damage or have lost their
						properties after handing over the goods to the Buyer due
						to violation of the rules of use and storage
					</li>
					<li className={css.exchange_failed_item}>
						Goods with damaged packaging or its components
						(including mattresses without packaging/with damaged
						packaging or those that were in use), except in cases
						where it was not possible to detect the defect of the
						product without damage to the packaging or the product
						was sold / delivered from damaged packaging
					</li>
					<li className={css.exchange_failed_item}>
						Goods that were manufactured to an individual order
						and/or according to samples (sketches) of the buyer,
						including goods that have individually defined
						properties, namely: non-standard dimensions, appearance,
						construction, addition of external details (pockets,
						handles, etc.). ), fabrics that were selected by the
						Buyer individually before the order
					</li>
				</ol>
			</div>
			<div className={css.exchange_conditions}>
				<h2 className={css.exchange_conditions_title}>
					Special return and exchange conditions
				</h2>
				<ul className={css.exchange_conditions_list}>
					<li className={css.exchange_conditions_item}>
						When returning funds to the Buyer's payment cards, funds
						may be delayed by the bank. The date of refund is
						considered the date of withdrawal of funds from the
						seller's current account in favor of the buyer;
					</li>
					<li className={css.exchange_conditions_item}>
						The conditions of exchange and return do not apply to
						orders paid by legal entities by cashless payment, to
						wholesale orders and purchases for the purpose of
						resale;
					</li>
					<li className={css.exchange_conditions_item}>
						Payments for additional services for orders, such as
						lifting to the floor, skidding, assembly, etc. are not
						subject to return;
					</li>
					<li className={css.exchange_conditions_item}>
						In the case when a gift was added to the product, the
						gift must also have a commercial form and must be
						transferred together with the product;
					</li>
					<li className={css.exchange_conditions_item}>
						The delivery of the product, in case of its return, is
						carried out by the Buyer at his own expense to the place
						indicated by the seller of such product after filling
						out the refund form. The risk of keeping the goods until
						the moment of handing over to the seller is borne by the
						buyer;
					</li>
					<li className={css.exchange_conditions_item}>
						If the verification of the completeness of the Product
						and its appearance requires additional examinations or
						analyzes in a period exceeding 7 working days, the
						refund to the buyer is made after the actual completion
						of the verification procedures in a longer period;
					</li>
				</ul>
			</div>
		</>
	);
};
