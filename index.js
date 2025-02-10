let homeScoreEl = document.getElementById("home-score-el");
let awayScoreEl = document.getElementById("away-score-el");
let homeCount = 0;
let awayCount = 0;

function addPoints(team, points) {
    if (team === "home") {
        homeCount += points;
        homeScoreEl.innerText = homeCount;
    } else if (team === "away") {
        awayCount += points;
        awayScoreEl.innerText = awayCount;
    }
}

function reset() {
    homeCount = 0;
    awayCount = 0;
    homeScoreEl.innerText = homeCount;
    awayScoreEl.innerText = awayCount;
}

// Example event listeners (assuming button IDs exist)
// document.getElementById("home-onePoint-btn").addEventListener("click", () => addPoints("home", 1));
// document.getElementById("home-twoPoint-btn").addEventListener("click", () => addPoints("home", 2));
// document.getElementById("home-threePoint-btn").addEventListener("click", () => addPoints("home", 3));

// document.getElementById("away-onePoint-btn").addEventListener("click", () => addPoints("away", 1));
// document.getElementById("away-twoPoint-btn").addEventListener("click", () => addPoints("away", 2));
// document.getElementById("away-threePoint-btn").addEventListener("click", () => addPoints("away", 3));

// document.getElementById("reset-btn").addEventListener("click", reset);
