import React, { Fragment } from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return <Fragment>{props.children}</Fragment>;
};

export default Layout;
