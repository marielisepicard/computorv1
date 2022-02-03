const { checkFormat } = require("./format");
const { parse } = require("./parser");
const { reduceEquation } = require("./reducedEquation");
const { solve } = require("./solve");

exports.launch = (str) => {
  const correctFormat = checkFormat(str);
  const eqDescription = parse(str);
  if (correctFormat) {
    const solved = reduceEquation(eqDescription);
    if (!solved) {
      solve(eqDescription);
    }
  } else {
    if (eqDescription) {
      const solved = reduceEquation(eqDescription);
    } else {
      console.log("Wrong format.");
    }
  }
};
