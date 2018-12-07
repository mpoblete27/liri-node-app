require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api')
var key = require('./key.js')
var spotify = new Spotify(key.spotify);
var fs = require("fs-extra");

if(process.argv[2] === "concert-this"){
    var artist = process.argv[3];
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryUrl)
    .then(function(response){
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city + ", " + response.data[0].venue.region);

        // USE MOMENT TO FORMAT THIS NEXT LINE
        console.log(response.data[0].datetime);
        });
    }

else if(process.argv[2] === "spotify-this-song"){
    var song = process.argv[3];
    var queryUrl = "https://api.spotify.com/v1/searchq=type" + song;
    axios.get(queryUrl)
    .then(function(response){
        //responce not working, once the response can
        //be studied, the following console.logs
        //can be corrected.
        console.log(response.data.artist);
        console.log(response.data.songname);
        console.log(response.data.preview);
        console.log(response.data.album);
})}

else if(process.argv[2] === "movie-this"){
    var movieName = process.argv[3]; 
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function(response){
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("Movie Rating: " + response.data.Rated);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country Released: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        )
    }

else if(process.argv[2] === "do-what-it-says"){
    var randomTxt = fs.readFile("random.txt", "utf8", function(err, data){
        if (err) {
            return console.log(err);
        }
        var output = data.split(", ");
        for (var i = 0; i < output.length; i++){
            console.log(output);
        };
//get each output into the terminal line prepended with "node" and liri.js
//this way, whatever is in the txt file will be searched for in the app
    });
}
