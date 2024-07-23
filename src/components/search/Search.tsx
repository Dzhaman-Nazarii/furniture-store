import { FC } from 'react';
import css from './Search.module.css';
import searchSvg from '../../img/search.svg';

export const Search: FC = () => {
  return (
    <div className={css.search_container}>
      <input type="text" className={css.search_input} placeholder="What are you looking for?" />
      <img src={searchSvg} alt="search" className={css.search_icon} />
    </div>
  )
}
