import axios from "axios"

const URL = "http://localhost:3000";

async function fetchData() {
    const responseArtists = await axios.get(`${URL}/artists`);
    const responseSongs = await axios.get(`${URL}/songs`);
}

fetchData();

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;



