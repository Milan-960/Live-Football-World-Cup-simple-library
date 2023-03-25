const LiveFootballScoreboard = require("./LiveFootballScoreboard");

// creating a new scoreboard
const scoreboard = LiveFootballScoreboard();

// starting a new game and store the returned objects
const game1 = scoreboard.startNewGame("Mexico", "Canada");

// updating the scores of the games
scoreboard.updateScore(game1, 0, 5);

// printing out the summary
console.log(scoreboard.startNewGame());
