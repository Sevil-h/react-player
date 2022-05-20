import React, { useState, useEffect } from "react";
import classes from "./Player.module.css";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = ({ token, trackUri }) => {
	const [play, setPlay] = useState(false);

	useEffect(() => {
		setPlay(true);
	}, [trackUri]);

	if (!token) return null;
	return (
		<div className={classes.player}>
			<SpotifyPlayer
				token={token}
				showSaveIcon
				callback={(state) => {
					if (!state.isPlaying) setPlay(false);
				}}
				play={play}
				uris={trackUri ? [trackUri] : []}
			/>
		</div>
	);
};

export default Player;
