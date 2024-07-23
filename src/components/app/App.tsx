import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Favourite } from "../../pages/Favourite";
import { Basket } from "../../pages/Basket";
import { FC } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Profile } from "../../pages/Profile";

export const App: FC = () => {
	return (
		<>
			<Header />
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
			<Footer />
		</>
	);
};
