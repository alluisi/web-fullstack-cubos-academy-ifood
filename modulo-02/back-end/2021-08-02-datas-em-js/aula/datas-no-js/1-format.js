// const datefns = require("date-fns");
// const format = require("date-fns/format");

const { format } = require("date-fns");

const date = new Date(2017, 3, 12);

console.log(format(date, "dd-MMM-yyyy"));
console.log(format(date, "dd 'de' MMM 'de' yyyy"));