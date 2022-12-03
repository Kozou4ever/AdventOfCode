const { readFileSync } = require("fs"),
  path = require("path");

try {
  const data = readFileSync(path.join(__dirname, "/input.txt"), "utf8")
    .trim()
    .split("\n");
  console.log(`The answer for the Part 1 is: ${Part1(data)}`);
  console.log(`The answer for the Part 2 is: ${Part2(data)}`);
} catch (err) {
  console.error(err);
}

//Function to retrieve score for each line corresponding to a game
function getScoreForEachGame(arr, options) {
  let score = 0;
  arr.forEach((e) => {
    let match = e.split(" ").join("").trim();
    score += options[match];
  });
  return score;
}

//Function to answer Part 1
function Part1(arr) {
  const options = {
    AY: 2 + 6,
    BY: 2 + 3,
    CY: 2 + 0,
    AX: 1 + 3,
    BX: 1 + 0,
    CX: 1 + 6,
    AZ: 3 + 0,
    BZ: 3 + 6,
    CZ: 3 + 3,
  };
  return getScoreForEachGame(arr, options);
}

//Function to answer Part 2
function Part2(arr) {
  const options = {
    AY: 1 + 3,
    BY: 2 + 3,
    CY: 3 + 3,
    AX: 3 + 0,
    BX: 1 + 0,
    CX: 2 + 0,
    AZ: 2 + 6,
    BZ: 3 + 6,
    CZ: 1 + 6,
  };
  return getScoreForEachGame(arr, options);
}
