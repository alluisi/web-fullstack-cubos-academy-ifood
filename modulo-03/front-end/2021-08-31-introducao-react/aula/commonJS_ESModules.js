// commonJS

//util.js
module.exports.soma = (x, y) => x + y;
//index.js
const { soma } = require('./util.js');
console.log(soma(2, 4));

//util.js
module.exports = (x, y) => x + y;
//index.js
const oQueQuisermos = require('./util.js');
console.log(oQueQuisermos(2, 4));


// ESModules

//util.js
export const soma = (x, y) => x + y;
//index.js
import { soma } from './util.js';
console.log(soma(2, 4));

//util.js
export default (x, y) => x + y;
//index.js
import oQueQuisermos from './util.js';
console.log(oQueQuisermos(2, 4));