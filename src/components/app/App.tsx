import { FC } from "react";
import css from './App.module.css';
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const App: FC = () => {
	return (
		<div className={css.wrapper}>
			<Header />
			<Footer />
		</div>
	);
};
