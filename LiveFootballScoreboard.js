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

  function finishGame(game) {
    const index = games.indexOf(game);
    if (index === -1) {
      throw new Error("Game does not exist.");
    }
    games.splice(index, 1);
  }

  // returns a sorted summary of the games in the scoreboard
  function getSummary() {
    const sortedGames = [...games]
      .map((game, index) => ({ ...game, originalIndex: index }))
      .sort((a, b) => {
        const scoreDiff =
          a.homeScore + a.awayScore - (b.homeScore + b.awayScore);
        if (scoreDiff !== 0) {
          return scoreDiff;
        }
        return 0;
      });
    return sortedGames
      .reverse()
      .map(
        (game, i) =>
          `${i + 1}. ${game.homeTeam} ${game.homeScore} - ${game.awayScore} ${
            game.awayTeam
          }`
      );
  }

  return {
    startNewGame,
    updateScore,
    finishGame,
    getSummary,
  };
};
module.exports = LiveFootballScoreboard;
