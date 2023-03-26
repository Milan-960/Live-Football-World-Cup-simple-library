const LiveFootballScoreboard = require("./LiveFootballScoreboard");

// creating a new scoreboard
const scoreboard = LiveFootballScoreboard();

// starting a new game and store the returned objects
const game1 = scoreboard.startNewGame("Mexico", "Canada");
const game2 = scoreboard.startNewGame("Spain", "Brazil");
const game3 = scoreboard.startNewGame("Germany", "France");
const game4 = scoreboard.startNewGame("Uruguay", "Italy");
const game5 = scoreboard.startNewGame("Argentina", "Australia");

// updating the scores of the games
scoreboard.updateScore(game1, 0, 5);
scoreboard.updateScore(game2, 10, 2);
scoreboard.updateScore(game3, 2, 2);
scoreboard.updateScore(game4, 6, 6);
scoreboard.updateScore(game5, 3, 1);

// printing out the summary
console.log(scoreboard.getSummary());
