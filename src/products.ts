import greyChairImg from './img/grey-chair.jpeg';
import whiteChairImg from './img/white-chair_.jpeg';
import blackChairImg from './img/black-chair.jpeg';
import tableImg from './img/table.jpeg';
import blackSofaImg from './img/black-sofa.jpeg';
import whiteSofaImg from './img/white-sofa.jpeg';

export interface IProduct {
	id: string;
	title: string;
	img: string;
	desc: string;
	price: number;
	delivery?: string;
	payment?: string
}

export const products: IProduct[] = [
	{
		id: '1',
		title: "Grey chair",
		img: greyChairImg,
		desc: "This unbelievable abigail lounge chair in grey color velvet, comfortable barrel chair special for you.",
		price: 39.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '2',
		title: "White chair",
		img: whiteChairImg,
		desc: "This desk chair is made of comfortable short faux fur and sturdy metal legs with wood grain.",
		price: 45.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '3',
		title: "Black chair",
		img: blackChairImg,
		desc: "Whether drawn up to your dining table or rounding out your living room with an extra seat.",
		price: 49.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '4',
		title: "Table",
		img: tableImg,
		desc: "This extraordinary piece of craftsmanship is born from the finest Acacia wood, exuding timeless elegance.",
		price: 149.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '5',
		title: "Black sofa",
		img: blackSofaImg,
		desc: "This elegant black velvet sofa and couch, celvet ipholstered couch for your living eoom.",
		price: 549.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '6',
		title: "White sofa",
		img: whiteSofaImg,
		desc: "Velvet cloth and solid wood frame make the sofa very luxurious in a modern sense with sophistication.",
		price: 599.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '7',
		title: "Grey chair",
		img: greyChairImg,
		desc: "This unbelievable abigail lounge chair in grey color velvet, comfortable barrel chair special for you.",
		price: 39.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '8',
		title: "White chair",
		img: whiteChairImg,
		desc: "This desk chair is made of comfortable short faux fur and sturdy metal legs with wood grain.",
		price: 45.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '9',
		title: "Black chair",
		img: blackChairImg,
		desc: "Whether drawn up to your dining table or rounding out your living room with an extra seat.",
		price: 49.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '10',
		title: "Table",
		img: tableImg,
		desc: "This extraordinary piece of craftsmanship is born from the finest Acacia wood, exuding timeless elegance.",
		price: 149.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '11',
		title: "Black sofa",
		img: blackSofaImg,
		desc: "This elegant black velvet sofa and couch, celvet ipholstered couch for your living eoom.",
		price: 549.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	},
	{
		id: '12',
		title: "White sofa",
		img: whiteSofaImg,
		desc: "Velvet cloth and solid wood frame make the sofa very luxurious in a modern sense with sophistication.",
		price: 599.99,
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'In cash or through a terminal in the store, non-cash settlement, card, installments, payment in installments, Whitepay crypto.'
	}
];