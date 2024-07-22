import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Contacts } from "../../pages/Contacts";
import { Basket } from "../../pages/Basket";
import { FC } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const App: FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					Component={Home}
				/>
				<Route
					path="/contacts"
					Component={Contacts}
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
			<Footer />
		</>
	);
};
