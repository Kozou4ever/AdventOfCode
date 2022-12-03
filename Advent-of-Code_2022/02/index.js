const { readFileSync } = require("fs"),
  path = require("path"),
  options = {
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

try {
  const data = readFileSync(path.join(__dirname, "/input.txt"), "utf8")
    .trim()
    .split("\n");
  let score = 0;
  data.forEach((e) => {
    let match = e.split(" ").join("").trim();
    score += options[match];
  });
  console.log(score);
} catch (err) {
  console.error(err);
}

//Part 2 WIP ...
