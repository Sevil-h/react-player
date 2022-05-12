export const authEndpoint = "https://accounts.spotify.com/authorize?";
const redirectUri = process.env.REACT_API_REDIRECT_URI;
const clientId = process.env.REACT_APP_CLIENT_ID;
const scopes = [
	"user-modify-playback-state",
	"user-read-playback-state",
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-recently-played",
	"user-read-playback-position",
	"user-top-read",
	"user-library-read",
	"user-library-modify",
	"streaming",
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, state) => {
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
