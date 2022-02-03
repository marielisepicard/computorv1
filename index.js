const {
  launchTest1,
  launchTest2,
  launchTest3,
  launchTest4,
  launchTest5,
  launchTest6,
  launchTest7,
  launchTest8,
  launchTest9,
} = require("./utils/test");
const { launch } = require("./utils/launch");

if (process.argv.length === 3 && process.argv[2]) {
  if (process.argv[2] == "--test1") {
    launchTest1();
  } else if (process.argv[2] == "--test2") {
    launchTest2();
  } else if (process.argv[2] == "--test3") {
    launchTest3();
  } else if (process.argv[2] == "--test4") {
    launchTest4();
  } else if (process.argv[2] == "--test5") {
    launchTest5();
  } else if (process.argv[2] == "--test6") {
    launchTest6();
  } else if (process.argv[2] == "--test7") {
    launchTest7();
  } else if (process.argv[2] == "--test8") {
    launchTest8();
  } else if (process.argv[2] == "--test9") {
    launchTest9();
  } else {
    launch(process.argv[2]);
  }
} else {
  console.log(
    `Wrong usage.\nUsage: npm start <Equation> \nLaunch tests: npm test\nExample: node index.js "5 * X^0 + 4 * X^1 - 9.3 * X^2 = 1 * X^0"`
  );
}
