const { addBusinessDays } = require("date-fns");

const date = new Date(2018, 2, 13, 12);

console.log(date);

console.log(addBusinessDays(date, 10));