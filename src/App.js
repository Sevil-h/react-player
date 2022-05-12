import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";

function App() {
	return (
		<Fragment>
			<Login />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Fragment>
	);
}

export default App;
