const { parse } = require("date-fns");

const resultado = parse("02/11/1980", "dd/MM/yyyy", new Date());

console.log(resultado);