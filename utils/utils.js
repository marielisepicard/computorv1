exports.ft_abs = (nb) => (nb < 0 ? -nb : nb);

exports.getEquationDescriptionLength = (eq) => {
  let length = 0;
  for (const i in eq) {
    length++;
  }
  return length;
};

exports.getDegree = (eqDescription) => {
  let degree = 0;
  for (const value in eqDescription) {
    degree = value > degree ? value : degree;
  }
  return degree;
};

exports.ft_sqrt = (x) => {
  const isGoodEnough = (guess) =>
    this.ft_abs(guess * guess - x) / x < 0.0000001;
  const improve = (guess) => (guess + x / guess) / 2;
  const sqrIter = (guess) =>
    isGoodEnough(guess) ? guess : sqrIter(improve(guess));
  return sqrIter(1.0).toFixed(6);
};

exports.cleanArr = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
