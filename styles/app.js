
// create namespace
friendsApp = {};

// base url for api
friendsApp.url = new URL("https://friends-quotes-api.herokuapp.com/quotes/");

// method to get user selection when button is clicked
friendsApp.userChoice = (allQuotes) => {
  const button = document.querySelector(".random-button");
  const pulldownMenu = document.getElementById("friends-name");
  let friendChoice = pulldownMenu.value;
  // when the "shuffle" button is clicked, run the code blow
  button.addEventListener("click", function(event) {
    // stop default behaviour of button click
    event.preventDefault();
    // on button click, store the value of the pulldown menu
    friendChoice = pulldownMenu.value;
    // run function to filter new array with just quotes from selection
    friendsApp.characterQuotes(allQuotes, friendChoice);
  })
}

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
}

// method to create new array with JUST quotes from the character selected
friendsApp.characterQuotes = (allQuotes, friendChoice) => {
  // capitalize first letter in friendChoice
  const firstLetter = friendChoice.charAt(0);
  const capitalLetter = firstLetter.toUpperCase();
  const smallLetters = friendChoice.slice(1);
  const friendChoiceCapital = capitalLetter + smallLetters;

  // filter new array with just quotes from user selected character
  const characterQuotes = allQuotes.filter((quotes) => {
    return quotes.character === friendChoiceCapital;
  });
  // select a random quote from array
  // pass random quote variable to friendsApp.displayData method
  console.log(characterQuotes);
  const randomQuote = characterQuotes[Math.floor(Math.random()*characterQuotes.length)].quote;

  // run method to display data on page
  friendsApp.displayData(randomQuote);
}

// method to request quote data from api
friendsApp.getQuotes = () => {
  fetch(friendsApp.url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    // storing data in an array 
    const allQuotes = data;
    // run function to see user selection (returned as "character")
    friendsApp.userChoice(allQuotes);
  })
}

// create an initialization method
friendsApp.init = () => {
  // calling the method that makes the api request
  friendsApp.getQuotes();
}

// call the init method to start the app
friendsApp.init();



