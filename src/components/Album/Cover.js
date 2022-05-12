import React, { useState } from "react";
import classes from "./Cover.module.css";
import Card from "./Card";

const Cover = ({ imageUrl }) => {
	const [hover, setHover] = useState(false);
	const [click, setClick] = useState(false);

	return (
		<div className={classes.container}>
			<img
				src={imageUrl}
				className={classes.cover}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				onClick={() => setClick(!click)}
			/>
			{click && <Card />}
			{!click ? (
				<div className={!hover ? classes.record : classes.recordHover}>
					<div className={classes.circle}>
						<img src={imageUrl} className={classes.smallCover} />
						<div className={classes.innerCircle}></div>
					</div>
				</div>
			) : (
				<div className={classes.recordPlay}>
					<div className={classes.circle}>
						<img src={imageUrl} className={classes.smallCover} />
						<div className={classes.innerCircle}></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cover;
