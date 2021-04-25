const { separateBookPages } = require("./separateBookPages");
const { setTheNumberOfDays } = require("./setTheNumberOfDays");

const numberOfDays = Number(setTheNumberOfDays("year", 3));
console.log(numberOfDays);

console.log(separateBookPages(500, numberOfDays));
