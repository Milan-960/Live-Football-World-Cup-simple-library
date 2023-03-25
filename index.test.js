// Import the js file to test
const LiveFootballScoreboard = require("./LiveFootballScoreboard");

describe("LiveFootballScoreboard", () => {
  it("should import the LiveFootballScoreboard module", () => {
    expect(typeof LiveFootballScoreboard).toBe("function");
  });
});
