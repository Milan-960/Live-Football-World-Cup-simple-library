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
});
