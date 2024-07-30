import { createContext, FC, ReactNode, useContext, useState } from "react";
import { IProduct } from "../products";

interface IFavouritesContextType {
  favourites: IProduct[];
  addFavourite: (product: IProduct) => void;
  removeFavourite: (productId: string) => void;
  getFavouriteCount: () => number;
}

const FavouritesContext = createContext<IFavouritesContextType | undefined>(undefined);

export const FavouritesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<IProduct[]>([]);

  const addFavourite = (product: IProduct) => {
    setFavourites((prevFavourites) => [...prevFavourites, product]);
  };

  const removeFavourite = (productId: string) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((item) => item.id !== productId)
    );
  };

  const getFavouriteCount = () => {
    return favourites.length;
  }

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, getFavouriteCount }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};