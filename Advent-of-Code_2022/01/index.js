const { readFileSync } = require("fs");
const path = require("path");

try {
  const data = readFileSync(path.join(__dirname, "/input.txt"), "utf8")
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");
  console.log(
    `The answser for the Part 1 is : ${Part1(getCaloriesByElves(data))}`
  );
  console.log(
    `The answser for the Part 2 is : ${Part2(getCaloriesByElves(data))}`
  );
} catch (err) {
  console.error(err);
}

//Main function for structuring the data
function getCaloriesByElves(arr) {
  const elves = arr.map((elf) => {
    let calories = elf.split("\n").map(Number);
    return calories.reduce((p, c) => p + c, 0);
  });
  return elves;
}

//Function to answer Part 1
function Part1(arr) {
  return Math.max(...arr);
}

//Function to answer Part 2
function Part2(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((p, c) => p + c, 0);
}
