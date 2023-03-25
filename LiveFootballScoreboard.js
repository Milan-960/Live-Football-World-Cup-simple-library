// The LiveFootballScoreboard function creates a new scoreboard object

const LiveFootballScoreboard = () => {
  // This games array holds all the games currently in progress!
  const games = [];

  function startNewGame(homeTeam, awayTeam) {
    const game = {
      startTime: Date.now(),
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
    };
    games.push(game);
    return game;
  }

  function updateScore(game, homeScore, awayScore) {
    game.homeScore = homeScore;
    game.awayScore = awayScore;
  }

  return {
    startNewGame,
    updateScore,
  };
};
module.exports = LiveFootballScoreboard;
