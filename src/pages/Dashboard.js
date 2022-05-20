import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Albums from "../components/Album/Albums/Albums";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayerContext } from "../context/DataLayer";
import Player from "../components/Player/Player";
import PlayingAlbum from "../components/Album/PlayingAlbums/PlayingAlbum";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.REACT_APP_CLI,
});

const Dashboard = (props) => {
	const [{ token }] = useContext(DataLayerContext);
	const [search, setSearch] = useState("metallica");
	const [searchResults, setSearchResults] = useState([]);
	const [playingTrack, setPlayingTrack] = useState([]);

	const chooseTrack = (track) => {
		setPlayingTrack(track);
		setSearch("");
	};

	useEffect(() => {
		if (!token) return;
		spotifyApi.setAccessToken(token);
	}, [token]);

	useEffect(() => {
		if (!search) return setSearchResults([]);
		if (!token) return;

		let cancel = false;
		spotifyApi.searchTracks(search).then((res) => {
			console.log(res);
			setSearchResults(
				res.tracks.items.map((track) => {
					return {
						artist: track.artists[0].name,
						title: track.name,
						uri: track.uri,
						albumUrl: track.album.images[0].url,
					};
				})
			);
		});

		return () => (cancel = true);
	}, [search, token]);

	return (
		<>
			<Container
				className="d-flex flex-column py-2"
				style={{ height: "100vh" }}
			>
				<Form.Control
					type="search"
					placeholder="Search Songs / Artists"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="albums">
					{searchResults.map((track) => (
						<Albums track={track} key={track.uri} chooseTrack={chooseTrack} />
					))}
				</div>
				<div>
					{searchResults.length === 0 && (
						<PlayingAlbum track={playingTrack} chooseTrack={chooseTrack} />
					)}
				</div>
			</Container>
			<Player token={token} trackUri={playingTrack?.uri} />
		</>
	);
};

export default Dashboard;
