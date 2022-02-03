const { cleanArr } = require("./utils");

exports.checkFormat = (str) => {
  let arr = str.split(" ");
  arr = cleanArr(arr);
  let i = 0;
  let last = "";
  while (i < arr.length) {
    if (last === "") {
      if (!isNaN(parseFloat(arr[i]))) {
        last = "number";
      } else if (arr[i] === "+" || arr[i] === "-") {
        last = "sign";
      } else {
        return false;
      }
    } else if (last === "sign") {
      if (!isNaN(parseFloat(arr[i]))) {
        last = "number";
      } else {
        return false;
      }
    } else if (last === "number") {
      if (arr[i] === "*") {
        last = "star";
      } else {
        return false;
      }
    } else if (last === "star") {
      if (isExponent(arr[i])) {
        last = "exponent";
      } else {
        return false;
      }
    } else if (last === "exponant") {
      if (arr[i] === "+" || arr[i] === "-") {
        last = "sign";
      } else if (arr[i] === "=") {
        last = "equal";
      } else {
        return false;
      }
    } else if (last === "equal") {
      if (!isNaN(parseFloat(arr[i]))) {
        last = "number";
      } else if (arr[i] === "-") {
        last = "sign";
      } else {
        return false;
      }
    }
    i++;
  }
  if (isExponent(arr[i - 1])) {
    return true;
  } else {
    return false;
  }
};

function isExponent(str) {
  if (str[0] && str[0] === "X" && str[1] && str[1] === "^") {
    const arr = str.split("^");
    if (arr.length !== 2) {
      return false;
    } else {
      let exponent = arr[1];
      if (!isNaN(parseInt(exponent))) {
        if (exponent < 0) {
          console.log("Error: exponent cannot be negative.");
          return false;
        } else if (exponent.includes(".")) {
          console.log("Error: exponent cannot be a float.");
          return false;
        }
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
