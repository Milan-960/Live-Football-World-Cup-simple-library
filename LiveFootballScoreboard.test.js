const LiveFootballScoreboard = require("./LiveFootballScoreboard");

// Test suite for LiveFootballScoreboard
describe("LiveFootballScoreboard", () => {
  // creating a new scoreboard
  let scoreboard;

  // beforeEach hook to create a new scoreboard before each test case
  beforeEach(() => {
    scoreboard = LiveFootballScoreboard();
  });

  // Test case for startNewGame
  test("startNewGame should add a new game with the initial score 0 - 0", () => {
    const game = scoreboard.startNewGame("Home", "Away");
    expect(game.homeTeam).toBe("Home");
    expect(game.awayTeam).toBe("Away");
    expect(game.homeScore).toBe(0);
    expect(game.awayScore).toBe(0);
  });

  // Test case for updateScore
  test("updateScore should update the score of the given game", () => {
    const game = scoreboard.startNewGame("Home", "Away");
    scoreboard.updateScore(game, 2, 1);
    expect(game.homeScore).toBe(2);
    expect(game.awayScore).toBe(1);
  });

  // Test case for finishGame
  test("finishGame should remove the game from the scoreboard", () => {
    const game1 = scoreboard.startNewGame("Home1", "Away1");
    const game2 = scoreboard.startNewGame("Home2", "Away2");
    expect(scoreboard.getSummary().length).toBe(2);
    scoreboard.finishGame(game1);
    expect(scoreboard.getSummary().length).toBe(1);
    scoreboard.finishGame(game2);
    expect(scoreboard.getSummary().length).toBe(0);
  });

  // Test case for getSummary
  test("getSummary should return a sorted summary of ongoing games", () => {
    const game1 = scoreboard.startNewGame("Mexico", "Canada");
    scoreboard.updateScore(game1, 0, 5);
    const game2 = scoreboard.startNewGame("Spain", "Brazil");
    scoreboard.updateScore(game2, 10, 2);
    const game3 = scoreboard.startNewGame("Germany", "France");
    scoreboard.updateScore(game3, 2, 2);
    const game4 = scoreboard.startNewGame("Uruguay", "Italy");
    scoreboard.updateScore(game4, 6, 6);
    const game5 = scoreboard.startNewGame("Argentina", "Australia");
    scoreboard.updateScore(game5, 3, 1);

    const summary = scoreboard.getSummary();
    expect(summary).toEqual([
      "1. Uruguay 6 - 6 Italy",
      "2. Spain 10 - 2 Brazil",
      "3. Mexico 0 - 5 Canada",
      "4. Argentina 3 - 1 Australia",
      "5. Germany 2 - 2 France",
    ]);
  });
});
