import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Spotify from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi({
	redirectUri: process.env.REACT_APP_REDIRECT_URI,
	clientId: process.env.REACT_APP_CLIENT_ID,
	clientSecret: process.env.REACT_APP_CLIENT_SECRET,
});

function App() {
	const [token, setToken] = useState();

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
