// Import the js file to test
const { helloWorld } = require("./index.js");

it("writing the first test to check!", () => {
  expect(helloWorld());
});
