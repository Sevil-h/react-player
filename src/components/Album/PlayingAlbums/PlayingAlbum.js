import React, { useState } from "react";
import classes from "./PlayingAlbum.module.css";

const PlayingAlbum = ({ track, chooseTrack }) => {
	const handlePlay = () => {
		chooseTrack(track);
	};
	return (
		<div className={classes.container}>
			<div className={classes.album} onClick={handlePlay}>
				<img className={classes.albumCover} src={track.albumUrl} />
				<div className={classes.recordPlay}>
					<img src={track.albumUrl} className={classes.image} />
					<div className={classes.smallCircle}></div>
				</div>
			</div>
		</div>
	);
};

export default PlayingAlbum;
