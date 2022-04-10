import { actor } from "./friends.js";

export const actorInfo = {};

// base url and endpoint urls
actorInfo.url = new URL("https://online-movie-database.p.rapidapi.com/");
actorInfo.urlActor = new URL(
  "https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst="
);

// api-key & header parameters
actorInfo.apiKey = "6bf02141b3mshed96cc59315b922p1b2b0ajsn395d88c7fcbf";
actorInfo.headerHost = "online-movie-database.p.rapidapi.com";
actorInfo.options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": `${actorInfo.headerHost}`,
    "X-RapidAPI-Key": `${actorInfo.apiKey}`,
  },
};

// method to grab actor information
actorInfo.getInfo = async (friendChoice) => {
  // convert character choice into actor ID and search API
  const actorID = actor[friendChoice];
  try {
    const biography = await fetch(
      `${actorInfo.urlActor}${actorID}`,
      actorInfo.options
    );
    const actorbio = await biography.json();
    actorInfo.displayActorData(actorbio);
  } catch (error) {
    alert("Failed to get actor info");
  }
};
// display Actor information to screen
actorInfo.displayActorData = (data) => {
  // create new elements and store actor info inside
  const actorName = document.createElement("h3");
  actorName.innerText = `Real Name: ${data.name}`;
  const actorBirthDate = document.createElement("p");
  actorBirthDate.innerText = `Born in: ${data.birthDate}`;
  const actorBirthPlace = document.createElement("p");
  actorBirthPlace.innerText = data.birthPlace;

  const actorBio = document.createElement("p");
  actorBio.innerText = data.miniBios[0].text;

  // create container div and add actor info
  const actorInfoDiv = document.querySelector("#actor-bio");
  actorInfoDiv.innerHTML = "";
  // actorInfoDiv.classList.add("actor-bio");

  actorInfoDiv.appendChild(actorName);
  actorInfoDiv.appendChild(actorBirthDate);
  actorInfoDiv.appendChild(actorBirthPlace);
  actorInfoDiv.appendChild(actorBio);
};

actorInfo.init = (friendChoice) => {
  actorInfo.getInfo(friendChoice);
};
