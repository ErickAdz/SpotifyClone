// Web playback SDK
//Redirect to Spotify official login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirect to home page (spotify clone) once logged in
const redirectUri = "http://localhost:3000/";

//client id from spotify dev
const clientId = "b293340b5e65469fbc1dd3a7fc91410f";

//things that "ill be able to do when i log in"
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
