import React from "react";
import { FaSpotify } from "react-icons/fa";
import { loginEndpoint } from "../spotify";

const Login = () => {
	return (
		<div
			className="container d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<a href={loginEndpoint} className="button">
				<span className="icon">
					<FaSpotify />
				</span>
				Login with Spotify
			</a>
		</div>
	);
};

export default Login;
