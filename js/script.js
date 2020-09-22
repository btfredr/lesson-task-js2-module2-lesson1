
// importing the array of games from games.js
import games from "./games.js";

// selecting the container on the html page
const gamesContainer = document.querySelector(".game-container");


// manipulating the DOM
games.forEach(function (game) {
    gamesContainer.innerHTML += `<li>${game.name} Rating: ${game.rating}</li>`;
});

// selecting the list I made above
const gameItems = document.querySelectorAll("li");

// toggling the played status with a click event
gameItems.forEach(function (item) {
    item.addEventListener("click", toggleStatus);
});

// displaying the "played" status by changing the css class when the user clicks on the list item
function toggleStatus(event) {
    event.target.classList.toggle("played");
}