console.log("this is working");

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

console.log("test test test")

friendsApp = {};

// no api required
friendsApp.url = new URL("https://friends-quotes-api.herokuapp.com/quotes/100");
// below not necessary yet
// friendsApp.url.search = new URLSearchParams({quotes})

fetch(friendsApp.url)
.then(response => response.json())
.then(data => console.log(data));



