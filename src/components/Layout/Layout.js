import React, { Fragment, useContext } from "react";
import classes from "./Layout.module.css";
import Footer from "../Footer/Footer";
import { DataLayerContext } from "../../context/DataLayer";

const Layout = (props) => {
	const [{ token }] = useContext(DataLayerContext);
	return (
		<Fragment>
			<div className={classes.container}>{props.children}</div>
			{token && <Footer />}
		</Fragment>
	);
};

export default Layout;
