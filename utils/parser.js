const { cleanArr } = require("./utils");

exports.parse = (str) => {
  const eqDescription = {};
  let arr = str.split(" ");
  arr = cleanArr(arr);

  let i = 0;
  let sign = false;
  let equalBehind = false;

  while (i < arr.length) {
    if (!isNaN(parseFloat(arr[i]))) {
      let nb = parseFloat(arr[i]);
      const exponent = arr[i + 2] ? arr[i + 2].split("^")[1] : undefined;
      if (!exponent) {
        return undefined;
      }
      if ((sign && !equalBehind) || (!sign && equalBehind)) {
        nb = -nb;
      }
      const currentNb = eqDescription[exponent] ? eqDescription[exponent] : 0;
      eqDescription[exponent] = currentNb + nb;
      sign = false;
      i += 3;
    } else if (arr[i] === "+" || arr[i] === "-") {
      if (arr[i] === "-") {
        sign = true;
      }
      i++;
    } else if (arr[i] === "=") {
      equalBehind = true;
      i++;
    } else {
      return undefined;
    }
  }
  return eqDescription;
};
