const { startOfDay, startOfHour, endOfHour, endOfDay } = require("date-fns");

const date = new Date(2008, 9, 13, 11, 55);

console.log(date);
console.log(startOfDay(date));
console.log(startOfHour(date));
console.log(endOfDay(date));