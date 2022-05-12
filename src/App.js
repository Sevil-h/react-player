import React, { Fragment, useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import { DataLayerContext } from "./context/DataLayer";
import Layout from "./components/Layout/Layout";

const spotify = new SpotifyWebApi({
	redirectUri: process.env.REACT_APP_REDIRECT_URI,
	clientId: process.env.REACT_APP_CLIENT_ID,
	clientSecret: process.env.REACT_APP_CLIENT_SECRET,
});

function App() {
	const [{ token }, dispatch] = useContext(DataLayerContext);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			spotify.setAccessToken(_token);
		}
	});

	return (
		<Layout>
			{!token ? (
				<Login />
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			)}
		</Layout>
	);
}

export default App;
