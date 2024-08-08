import { FC } from 'react';
import css from './Search.module.css';
import searchSvg from '../../svg/search.svg';
import { useSearch } from '../../context/SearchContext';

export const Search: FC = () => {
  const { searchValue, setSearchValue } = useSearch();

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={css.search_container}>
      <input
        value={searchValue}
        type="text"
        className={css.search_input}
        placeholder="What are you looking for?"
        onChange={handleSearch}
      />
      <img src={searchSvg} alt="search" className={css.search_icon} />
    </div>
  );
};