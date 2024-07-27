import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IProduct } from "../products";

interface IBasketContextType {
	basket: IProduct[];
	addToBasket: (product: IProduct) => void;
	removeFromBasket: (productId: string) => void
}

const BasketContext = createContext<IBasketContextType | undefined>(undefined);

export const BasketProvider: FC<{children: ReactNode}> = ({children}) => {
	const [basket, setBasket] = useState<IProduct[]>([]);

	const addToBasket = (product: IProduct) => {
		setBasket((prevBasket) => [...prevBasket, product])
	}

	const removeFromBasket = (productId: string) => {
		setBasket((prevBasket) =>
			prevBasket.filter((item) => item.id !== productId))
	}

	return (
		<BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
			{children}
		</BasketContext.Provider>
	)
}

export const useBasket = () => {
	const context = useContext(BasketContext);
	if(!context) {
		throw new Error('useFavourites must be used within a FavouritesProvider');
	}	return context
}