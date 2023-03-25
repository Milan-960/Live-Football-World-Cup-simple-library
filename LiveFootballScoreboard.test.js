const LiveFootballScoreboard = require("./LiveFootballScoreboard");

// Test suite for LiveFootballScoreboard

describe("LiveFootballScoreboard", () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = LiveFootballScoreboard();
  });

  test("startNewGame should add a new game with the initial score 0 - 0", () => {
    const game = scoreboard.startNewGame("Home", "Away");
    expect(game.homeTeam).toBe("Home");
    expect(game.awayTeam).toBe("Away");
    expect(game.homeScore).toBe(0);
    expect(game.awayScore).toBe(0);
  });
});
