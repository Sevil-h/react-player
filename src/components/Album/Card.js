import React from "react";
import classes from "./Card.module.css";

const Card = () => {
	return (
		<div className={classes.card}>
			<div className={classes.info}>
				<h2>The Beatles</h2>
				<h4>Abbey Road</h4>
				<h5>"Let it be"</h5>
			</div>
			<div></div>
		</div>
	);
};

export default Card;
