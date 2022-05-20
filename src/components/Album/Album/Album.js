import React, { useState } from "react";
import classes from "./Album.module.css";

const Album = ({ track, chooseTrack }) => {
	const [hover, setHover] = useState(false);
	const [click, setClick] = useState(false);

	const handlePlay = () => {
		setClick(!click);
		chooseTrack(track);
	};

	return (
		<div className={classes.album} onClick={handlePlay}>
			<img
				className={classes.albumCover}
				src={track.albumUrl}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			/>
			<div className={classes.card}>
				<h3 className={classes.title}>{track.title}</h3>
				<h4 className={classes.artist}>{track.artist}</h4>
			</div>
			{!click ? (
				<div className={!hover ? classes.record : classes.hover}>
					<img src={track.albumUrl} className={classes.image} />
					<div className={classes.smallCircle}></div>
				</div>
			) : (
				<div className={classes.recordPlay}>
					<img src={track.albumUrl} className={classes.image} />
					<div className={classes.smallCircle}></div>
				</div>
			)}
		</div>
	);
};

export default Album;
