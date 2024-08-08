import { createContext, useContext, useState, ReactNode, FC } from 'react';

interface ISearchContextProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchContext = createContext<ISearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};