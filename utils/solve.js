const { getDegree, ft_sqrt, ft_abs } = require("./utils");

exports.solve = (eqDescription) => {
  const degree = getDegree(eqDescription);
  if (parseInt(degree) === 1) {
    console.log("Polynomial Degree: 1 ");
    solve1DegEq(eqDescription);
  } else if (parseInt(degree) === 2) {
    const d = getDisc(eqDescription);
    console.log(
      `Discriminant is defined by "b * b - 4ac". Here Discriminant is`,
      d.toString()
    );
    if (d === 0) {
      getSolveWithNulDis(eqDescription, d);
    } else if (d >= 0) {
      getSolWithPosDis(eqDescription, d);
    } else {
      getSolWithNegDis(eqDescription, d);
    }
  } else if (parseInt(degree) > 2) {
    console.log(
      "The polynomial degree is stricly greater than 2, I can't solve."
    );
  }
};

function getDisc(eqDesc) {
  const c = eqDesc["0"] ? eqDesc["0"] : 0,
    b = eqDesc["1"] ? eqDesc["1"] : 0,
    a = eqDesc["2"] ? eqDesc["2"] : 0;
  return b * b - 4 * a * c;
}

function getSolWithNegDis(eqDesc, disc) {
  const c = eqDesc["0"] ? eqDesc["0"] : 0,
    b = eqDesc["1"] ? eqDesc["1"] : 0,
    a = eqDesc["2"] ? eqDesc["2"] : 0;

  console.log(
    "Discriminant is strictly negative, the two complex solutions are:"
  );
  const res1 =
    (-b / (2 * a)).toFixed(6).toString() +
    " + i * " +
    ft_sqrt(ft_abs(disc)) / (2 * a).toString();
  const res2 =
    (-b / (2 * a)).toFixed(6).toString() +
    " - i * " +
    ft_sqrt(ft_abs(disc)) / (2 * a).toString();
  console.log(res1);
  console.log(res2);
}

function getSolWithPosDis(eqDesc, disc) {
  const dSquare = ft_sqrt(disc);

  const c = eqDesc["0"] ? eqDesc["0"] : 0,
    b = eqDesc["1"] ? eqDesc["1"] : 0,
    a = eqDesc["2"] ? eqDesc["2"] : 0;

  const res1 = (-b - parseFloat(dSquare)) / (2 * a);
  const res2 = (-b + parseFloat(dSquare)) / (2 * a);
  console.log("Discriminant is strictly positive, the two solutions are:");
  console.log(res1.toFixed(6).toString());
  console.log(res2.toFixed(6).toString());
}

function getSolveWithNulDis(eqDesc, disc) {
  const c = eqDesc["0"] ? eqDesc["0"] : 0,
    b = eqDesc["1"] ? eqDesc["1"] : 0,
    a = eqDesc["2"] ? eqDesc["2"] : 0;

  console.log("Discriminant is null, the solutions is:");
  console.log(-b / (2 * a));
}

function solve1DegEq(eqDes) {
  const b = eqDes["1"],
    c = eqDes["0"];

  if (!b) {
    console.log("No solution found :(");
  } else if (b === 0) {
    if (eqDes["0"] && eqDes["0"] !== 0) {
      console.log("No solution found :(");
    } else {
      console.log("All real number are solution to this equation");
    }
  } else {
    console.log((-c / b).toString());
  }
}
