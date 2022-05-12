import React, { useState } from "react";
import classes from "./Cover.module.css";

const Cover = ({ imageUrl }) => {
	const [hover, setHover] = useState(false);
	return (
		<div className={classes.container}>
			<img
				src={imageUrl}
				className={classes.cover}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			/>
			<div className={!hover ? classes.record : classes.recordHover}>
				<div className={classes.circle}>
					<img src={imageUrl} className={classes.smallCover} />
					<div className={classes.innerCircle}></div>
				</div>
			</div>
		</div>
	);
};

export default Cover;
