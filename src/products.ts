import mistysBedImg from './img/misty`s bed.jpg';

export interface IProduct {
	id: string;
	title: string;
	img: string;
	price: number;
	width: number;
	height: number;
	depth: number;
	style?: string;
	material?: string;
	delivery?: string;
	payment?: string
}

export const products: IProduct[] = [
	{
		id: '1',
		title: "Misty's bed",
		img: mistysBedImg,
		price: 39.99,
		width: 120.0,
		height: 75.0,
		depth: 80.0,
		style: "minimalism, modern",
		material: "multilayer plywood",
		delivery: 'Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.',
		payment: 'Cash, non-cash settlement, payment through Privat24.'
	}
];