const { isAfter, isBefore } = require("date-fns");

const depois = isAfter(new Date(2012, 6, 2), new Date(2014, 6, 2));
const antes = isBefore(new Date(2012, 6, 2), new Date(2014, 6, 2));

console.log(depois);
console.log(antes);