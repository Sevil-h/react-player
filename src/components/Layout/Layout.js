import React, { Fragment } from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<Fragment>
			<div className={classes.container}>{props.children}</div>
		</Fragment>
	);
};

export default Layout;
