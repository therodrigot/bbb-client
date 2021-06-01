import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import ParticipantesPage from "./pages/Participantes";
import ParedaoPage from "./pages/ParedaoPage";
import ParticipantePage from "./pages/ParticipantePage";
import Home from "./pages/Home";

const Routes = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Route component={Home} path="/" exact />
			<Route component={ParticipantesPage} path="/participantes/" exact />
			<Route component={ParticipantePage} path="/participante/:slug" exact />
			<Route component={ParedaoPage} path="/paredao/:slug" exact />
		</BrowserRouter>
	);
};

export default Routes;
