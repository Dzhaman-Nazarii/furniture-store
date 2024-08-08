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
		</>
	);
};
