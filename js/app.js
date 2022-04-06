import { photoFriends } from "./friends.js";
// PSEUDO CODE

// Welcome page with Friends banner in header & brief instructions to select a character from a drop down menu and a button the user can use to “Get a Quote!”. HTML layout, example quotes, and placeholder text in relevant input fields will help orient users to the instructions meaning.
// Store global app as namespace object (i.e. friendsApp or something similar) and begin storing relevant variables as properties of namespace.
// // friendsApp = {}
// // friendsApp.apiUrl = *base url for api as per documentation*
// // friendsApp.apiKey = *if required per API*
// Call functions within namespace initialisation function, placing in the proper order once complete so as to fire with no errors.

// GET USER DATA
// Character selection dropdown menu will provide main characters (and some minor faves) as options to select.
// “Get a Quote!” button with click/submit event listener. Once triggered, save all user values in any associated input fields as variables (method: characterChoice).

// 	MANIPULATE DATA/FETCH RESPONSE
// Code method (getQuote) to return values related to characterChoice (user input) through API call.
// Store returned API data as variables to fulfill initial request (i.e. quote itself, episode name, season number).
// Alert user should they attempt to submit “Get a Quote!” button without choosing value for character select.

// 	DISPLAY API DATA/MANIPULATE DOM
// Code method (displayData) to display returned values of getQuote method by:
// Store HTML DOM elements to be altered as variables.
// Create new HTML elements required to display returned API data.
// Populate and append created elements within the properly defined DOM structure with stored API data

// STRETCH: Upon presenting the quote to user, offer user choice to select to see another quote, plot synopsis of current quote, details related to episode, any other applicable data returned from getQuote method.

const friendsApp = {};

// base url for api
friendsApp.url = new URL("https://friends-quotes-api.herokuapp.com/quotes/");

// method to get user selection when button is clicked
friendsApp.userChoice = (allQuotes) => {
  const button = document.querySelector(".random-button");
  const pulldownMenu = document.getElementById("friends-name");
  let friendChoice = pulldownMenu.value;
  // when the "shuffle" button is clicked, run the code blow
  button.addEventListener("click", function (event) {
    // stop default behaviour of button click
    event.preventDefault();
    // on button click, store the value of the pulldown menu
    friendChoice = pulldownMenu.value;
    // run function to filter new array with just quotes from selection
    friendsApp.characterQuotes(allQuotes, friendChoice);
    //run method to display image on page
    friendsApp.updatePhoto(friendChoice);
  });
};

// method to display quote on page
friendsApp.displayData = (displayQuote) => {
  // create new p element
  const quoteElement = document.createElement("p");
  // create text node and put character quote into it
  const quote = document.createTextNode(displayQuote);
  // put quote inside new p element
  quoteElement.appendChild(quote);
  // grab quote box
  const quoteBox = document.querySelector(".board");
  // clear current text in quote box
  quoteBox.innerHTML = "";
  // append into quote box on html
  quoteBox.appendChild(quoteElement);
};

// method to create new array with JUST quotes from the character selected
friendsApp.characterQuotes = (allQuotes, friendChoice) => {
  // filter new array with just quotes from user selected character
  const characterQuotes = allQuotes.filter((quotes) => {
    return quotes.character === friendChoice;
  });
  // select a random quote from array
  // pass random quote variable to friendsApp.displayData method
  console.log(characterQuotes);
  const randomQuote =
    characterQuotes[Math.floor(Math.random() * characterQuotes.length)].quote;

  // run method to display data on page
  friendsApp.displayData(randomQuote);
};

// method to request quote data from api
friendsApp.getQuotes = async () => {
  try {
    const response = await fetch(friendsApp.url);
    const allQuotes = await response.json();
    friendsApp.userChoice(allQuotes);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

friendsApp.updatePhoto = (character) => {
  // define image path
  const photoSRC = photoFriends[character];
  //get image node and change path
  const newImage = document.querySelector(".friendPhoto");
  newImage.src = photoSRC;
};

// create an initialization method
friendsApp.init = () => {
  // calling the method that makes the api request
  friendsApp.getQuotes();
};

// call the init method to start the app
friendsApp.init();
