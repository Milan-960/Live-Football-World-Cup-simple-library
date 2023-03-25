// The LiveFootballScoreboard function creates a new scoreboard object

const LiveFootballScoreboard = () => {
  // This games array holds all the games currently in progress!
  const games = [];

  // a function to start a new game and add it to the scoreboard
  function startNewGame(homeTeam, awayTeam) {
    // new game object with the current time, home team, away team, and initial scores of 0-0
    const game = {
      startTime: Date.now(),
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
    };
    // Adding the game object to the games array
    games.push(game);
    // returning the game object
    return game;
  }

  // a function to update the score of a given game
  function updateScore(game, homeScore, awayScore) {
    // updating the home score and away score of the game object
    game.homeScore = homeScore;
    game.awayScore = awayScore;
  }

  return {
    startNewGame,
    updateScore,
  };
};
module.exports = LiveFootballScoreboard;
