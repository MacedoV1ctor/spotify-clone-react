import {artistArray} from "../../front-end/src/assets/database/artists.js"
import {songsArray} from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";


const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id;

    return newArtistObj;   
})

const newsongsArray = songsArray.map((currentsongsObj) => {
    const newsongsObj = {...currentsongsObj};
    delete newsongsObj.id;

    return newsongsObj;   
})

const responseSongs = await db.collection("songs").insertMany(newsongsArray);

const responseArtists = await db.collection("artists").insertMany(newArtistArray);


//console.log(newArtistArray);
console.log(responseSongs, responseArtists);