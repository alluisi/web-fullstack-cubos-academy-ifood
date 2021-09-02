const { set, setMilliseconds } = require("date-fns");

const date = new Date(2008, 9, 13);

console.log(date);

console.log(set(date, {
    year: 2015,
    month: 6,
    date: 20
}));

console.log(setMilliseconds(date, 300));