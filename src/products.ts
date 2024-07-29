import mistysBedImg from "./img/misty`s bed.jpg";
import ballBedImg from "./img/Ball bed.jpg";
import VerneCoffeeTableImg from "./img/Verne Coffee table.jpg";
import SaraWardrobeImg from "./img/Sara wardrobe.jpg";
import BariWardrobeImg from "./img/Bari wardrobe.jpg";
import LeoTableImg from "./img/Leo table.jpg";
import ManhattanSofaImg from "./img/Manhattan sofa.jpg";
import RianaBedImg from "./img/Riana bed.jpg";
import LederSofaImg from "./img/Leder sofa.jpg";
import NitroDresserImg from "./img/Nitro dresser.jpg";
import RedfordChairImg from "./img/Redford chair.jpg";
import TimonSofaImg from "./img/Timon Sofa.jpg";

export interface IProduct {
	id: string;
	title: string;
	img: string;
	price: number;
	width: number;
	height: number;
	length: number;
	style?: string;
	material?: string;
	delivery?: string;
	payment?: string;
}

export const products: IProduct[] = [
	{
		id: "1",
		title: "Misty's bed",
		img: mistysBedImg,
		price: 249.99,
		width: 185.0,
		height: 110.0,
		length: 215.0,
		style: "Minimalism, modern",
		material: "Multilayer plywood",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "2",
		title: "Ball bed",
		img: ballBedImg,
		price: 149.99,
		width: 92.0,
		height: 117.0,
		length: 190.0,
		style: "Minimalism, modern",
		material: "Multilayer plywood",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "3",
		title: "Verne table",
		img: VerneCoffeeTableImg,
		price: 49.99,
		width: 110.0,
		height: 46.0,
		length: 60.0,
		style: "Minimalism, modern",
		material: "Laminated chipboard",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "4",
		title: "Sara wardrobe",
		img: SaraWardrobeImg,
		price: 349.99,
		width: 180.0,
		height: 212.0,
		length: 58.0,
		style: "Minimalism, modern",
		material: "Laminated chipboard",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "5",
		title: "Bari wardrobe",
		img: BariWardrobeImg,
		price: 249.99,
		width: 151.0,
		height: 219.0,
		length: 60.0,
		style: "Loft, minimalism, modern",
		material: "Laminated chipboard",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "6",
		title: "Leo table",
		img: LeoTableImg,
		price: 299.99,
		width: 160.0,
		height: 75.0,
		length: 90.0,
		style: "Classic, retro",
		material:
			"Beech wood legs, painted MDF tabletop, oak veneered MDF tabletop",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "7",
		title: "Manhattan sofa",
		img: ManhattanSofaImg,
		price: 549.99,
		width: 82.0,
		height: 150.0,
		length: 135.0,
		style: "Minimalism, modern",
		material: "Bonelle spring, polyurethane foam",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "8",
		title: "Riana bed",
		img: RianaBedImg,
		price: 499.99,
		width: 168.0,
		height: 95.0,
		length: 205.0,
		style: "Modern",
		material: "Laminated chipboard",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "9",
		title: "Leder sofa",
		img: LederSofaImg,
		price: 219.99,
		width: 77.0,
		height: 87.0,
		length: 200.0,
		style: "Minimalism, modern",
		material: "Bonelle spring, polyurethane foam",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "10",
		title: "Nitro dresser",
		img: NitroDresserImg,
		price: 109.99,
		width: 160.0,
		height: 80.0,
		length: 40.0,
		style: "Minimalism, modern",
		material: "Laminated chipboard",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "11",
		title: "Redford chair",
		img: RedfordChairImg,
		price: 105.99,
		width: 88.0,
		height: 65.0,
		length: 65.0,
		style: "Classic",
		material: "Bonelle spring, polyurethane foam",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	},
	{
		id: "12",
		title: "Timon sofa",
		img: TimonSofaImg,
		price: 74.99,
		width: 78.0,
		height: 88.0,
		length: 103.0,
		style: "Minimalism, modern",
		material: "Classic ottoman",
		delivery:
			"Free pickup is possible if the product is available in this warehouse. If the product is in a remote warehouse or needs to be moved from another store, the price is agreed with the manager.",
		payment: "Cash, non-cash settlement, payment through Privat24.",
	}
];
