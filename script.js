// SCORE VARIABLES

let guestCount = 0;
let homeCount = 0;

// SCORE ELEMENT VARIABLES

const homeScoreboardEl =  document.getElementById("home-scoreboard-el")
const guestScoreboardEl = document.getElementById("guest-scoreboard-el");

// function

function incrementTheScores (value, team) {
    if (team == "home") {
        homeCount = homeCount + value;
        homeScoreboardEl.innerText = homeCount;
    }
    else {
        guestCount = guestCount + value;
        guestScoreboardEl.innerText = guestCount;
    }
}



function reset() {
    guestCount = 0;
    homeCount = 0;
    homeScoreboardEl.innerText = 0;
    guestScoreboardEl.innerText = 0;
    
}




