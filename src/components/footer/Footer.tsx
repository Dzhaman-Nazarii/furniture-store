import { FC } from 'react';
import css from './Footer.module.css';

export const Footer: FC = () => {
  return (
	<footer className={css.footer}>
    <div>All rights reserved &copy;</div>
  </footer>
  )
}
