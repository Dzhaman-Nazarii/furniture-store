import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Favourite } from "../../pages/favourite/Favourite";
import { Basket } from "../../pages/basket/Basket";
import { FC } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Profile } from "../../pages/profile/Profile";
import { FavouritesProvider } from "../../context/FavouritesContext";
import { BasketProvider } from "../../context/BasketContext";

export const App: FC = () => {
	return (
		<BasketProvider>
			<FavouritesProvider>
				<div className={css.app_wrapper}>
					<header className={css.app_header}>
						<div className={css.app_header_content}>
							<Header />
						</div>
					</header>
					<main className={css.app_main}>
						<Routes>
							<Route
								path="/favourite"
								Component={Favourite}
							/>
							<Route
								path="/profile"
								Component={Profile}
							/>
							<Route
								path="/basket"
								Component={Basket}
							/>
							<Route
								path="*"
								Component={Home}
							/>
						</Routes>
					</main>
					<footer className={css.app_footer}>
						<div className={css.app_footer_content}>
							<Footer />
						</div>
					</footer>
				</div>
			</FavouritesProvider>
		</BasketProvider>
	);
};
