// create function to grab information about each actor
    // grab user selected character variable
    // turn character variable into actor name
    // search unofficial imdb api for actor information
    // store information into variables

// display function to show actor information to the webpage
    // create new elements for display
    // append new elements with retreived actor information


export const actorInfo = {};

const rachel = "nm0000098";
actorInfo.actor.chandler = "nm0001612";
actorInfo.actor.ross = "nm0001710";
actorInfo.actor.joey = "nm0001455";
actorInfo.actor.phoebe = "nm0001435";
actorInfo.actor.monica = "nm0001073";

console.log(actorInfo.actor.rachel);

// base url for uIMDB api
actorInfo.url = new URL("https://online-movie-database.p.rapidapi.com/");
// url for actor bio
actorInfo.urlActor = new URL("https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=");
// url actor image search

// api-key
actorInfo.apiKey = "6bf02141b3mshed96cc59315b922p1b2b0ajsn395d88c7fcbf";
// header parameter
actorInfo.headerHost = "online-movie-database.p.rapidapi.com";

actorInfo.options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': `${actorInfo.headerHost}`,
		'X-RapidAPI-Key': `${actorInfo.apiKey}`
	}
};

// method to grab info about actors
actorInfo.getInfo = () => {
  fetch(`${actorInfo.urlActor}${rachel}`, actorInfo.options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};




// jennifer anniston
// feb 11, 1960
// nm0000098

// matthew perry
// aug 19, 1969
// nm0001612

// courtney cox
// june 15, 1964
// nm0001073

// david schwimmer
// nov 2, 1966
// nm0001710

// matt leblanc
// july 25, 1967
// nm0001455

// lisa kudrow
// july 30, 1963
// nm0001435