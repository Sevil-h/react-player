import React from "react";
import { FaSpotify } from "react-icons/fa";
import { loginEndpoint } from "../spotify";

const Login = () => {
	return (
		<div className="login">
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
