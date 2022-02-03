const { ft_abs, getEquationDescriptionLength } = require("./utils");

exports.reduceEquation = (eqDescription) => {
  let solved = false;
  let reducedEq = "Reduced form:";
  const length = getEquationDescriptionLength(eqDescription);

  if (
    length === 2 &&
    eqDescription["2"] !== 0 &&
    (eqDescription["0"] === 0 || eqDescription["1"] === 0)
  ) {
    allNumber();
    solved = true;
  } else if (length === 1 && eqDescription["0"] !== 0) {
    console.log(
      "Reduced form:" +
        (eqDescription["0"] > 0 ? "" : " - ") +
        ft_abs(eqDescription["0"]) +
        " * X^0 = 0\nPolynomial Degree: 0\nNo solution found."
    );
    solved = true;
  } else if (
    length === 2 &&
    eqDescription["0"] !== 0 &&
    eqDescription["1"] === 0
  ) {
    console.log(
      "Reduced form:" +
        (eqDescription["0"] > 0 ? "" : " - ") +
        ft_abs(eqDescription["0"]) +
        " * X^0 = 0\nPolynomial Degree: 0\nNo solution found."
    );
    solved = true;
  } else if (
    length === 2 &&
    eqDescription["0"] === 0 &&
    eqDescription["1"] === 0
  ) {
    allNumber();
    solved = true;
  } else if (
    (length === 1 && eqDescription["0"] === 0) ||
    eqDescription["1"] === 0
  ) {
    allNumber();
    solved = true;
  } else {
    // delete key/value when value === 0 because we shouldn't display it.
    const updatedEqDescription = deleteNullValue(eqDescription);

    // get order because negative key are at the end of the obj
    const orderKeys = getKeyOrder(updatedEqDescription);
    for (let i = 0; i < orderKeys.length; i++) {
      let key = orderKeys[i];
      let value = updatedEqDescription[orderKeys[i]];
      if (i === 0) {
        reducedEq = reducedEq + (value >= 0 ? "" : " -");
      } else {
        reducedEq = reducedEq + (value >= 0 ? "+" : "-");
      }
      reducedEq = reducedEq + " " + ft_abs(value) + " * X^" + key + " ";
    }
    reducedEq = reducedEq + "= 0";
    console.log(reducedEq);
  }
  return solved;
};

function getKeyOrder(eqDescription) {
  let keys = [],
    stringKeys = [];
  for (i in eqDescription) {
    keys.push(parseFloat(i));
  }
  keys.sort((a, b) => a - b);
  keys.map((key) => stringKeys.push(key.toString()));
  return stringKeys;
}

function deleteNullValue(eqDescription) {
  let newEqDescription = {};
  for (i in eqDescription) {
    if (eqDescription[i] !== 0) {
      newEqDescription[i] = eqDescription[i];
    }
  }
  return newEqDescription;
}

function allNumber() {
  console.log(
    "Reduced form: 0 = 0 \nPolynomial Degree: 0\nAll real number are solution to this equation"
  );
}
