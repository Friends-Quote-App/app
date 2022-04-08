// create function to grab information about each actor
    // grab user selected character variable
    // turn character variable into actor name
    // search unofficial imdb api for actor information
    // store information into variables

// display function to show actor information to the webpage
    // create new elements for display
    // append new elements with retreived actor information


export const actorInfo = {};

// base url for uIMDB api
actorInfo.url = new URL("https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr");
// api-key
actorInfo.apiKey = "6bf02141b3mshed96cc59315b922p1b2b0ajsn395d88c7fcbf";
// header parameter
actorInfo.headerHost = "online-movie-database.p.rapidapi.com";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': actorInfo.headerHost,
		'X-RapidAPI-Key': actorInfo.apiKey
	}
};

// method to grab info about actors
actorInfo.getInfo = () => {
  fetch(actorInfo.url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

