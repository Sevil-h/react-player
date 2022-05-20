import React, { Fragment, useContext } from "react";
import classes from "./Layout.module.css";
import { DataLayerContext } from "../../context/DataLayer";

const Layout = (props) => {
	const [{ token }] = useContext(DataLayerContext);
	return (
		<Fragment>
			<div className={classes.container}>{props.children}</div>
		</Fragment>
	);
};

export default Layout;
