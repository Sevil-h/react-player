import classes from "./Albums.module.css";
import Album from "../Album/Album";

const Albums = ({ track, chooseTrack }) => {
	return (
		<div className={classes.container}>
			<Album track={track} chooseTrack={chooseTrack} />
		</div>
	);
};

export default Albums;
