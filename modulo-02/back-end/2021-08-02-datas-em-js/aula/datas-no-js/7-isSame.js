const { isSameDay } = require("date-fns");

const resultado = isSameDay(new Date(2014, 6, 2, 12, 30, 21, 700), new Date(2014, 6, 2, 12, 30, 20, 600));

console.log(resultado);