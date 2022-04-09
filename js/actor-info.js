import { actor } from "./friends.js";

export const actorInfo = {};

// base url and endpoint urls
actorInfo.url = new URL("https://online-movie-database.p.rapidapi.com/");
actorInfo.urlActor = new URL("https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=");

// api-key & header parameters
actorInfo.apiKey = "6bf02141b3mshed96cc59315b922p1b2b0ajsn395d88c7fcbf";
actorInfo.headerHost = "online-movie-database.p.rapidapi.com";
actorInfo.options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': `${actorInfo.headerHost}`,
    'X-RapidAPI-Key': `${actorInfo.apiKey}`
  }
};

// method to grab actor information
actorInfo.getInfo = (friendChoice) => {
  // convert character choice into actor ID and search API
  const actorID = actor[friendChoice];
  fetch(`${actorInfo.urlActor}${actorID}`, actorInfo.options)
    .then(response => response.json())
    .then(response => {
      actorInfo.displayActorData(response);
    })
    .catch(err => console.error(err));
};
// display Actor information to screen
actorInfo.displayActorData = (data) => {
  // create new elements and store actor info inside
  const actorName = document.createElement("h3");
  actorName.innerText = `Real Name: ${data.name}`;
  const actorBio = document.createElement("p");
  actorBio.innerText = data.miniBios[0].text;
  const actorBirthDate = document.createElement("p");
  actorBirthDate.innerText = data.birthDate; 
  const actorBirthPlace = document.createElement("p");
  actorBirthPlace.innerText = data.birthPlace;
  const actorHeight = document.createElement("p");
  actorHeight.innerText = data.heightCentimeters;

  // create container div and add actor info
  const actorInfoDiv = document.createElement("div");
  actorInfoDiv.classList.add("actor-bio");

  actorInfoDiv.appendChild(actorName);
  actorInfoDiv.appendChild(actorBio);
  actorInfoDiv.appendChild(actorBirthDate);
  actorInfoDiv.appendChild(actorBirthPlace);
  actorInfoDiv.appendChild(actorHeight);

  // clear current text in div
  document.querySelector("#actor-bio").innerHTML = "";
  // add actor info div to page
  document.querySelector("#actor-bio").appendChild(actorInfoDiv);
}

actorInfo.init = (friendChoice) => {
  actorInfo.getInfo(friendChoice);
}