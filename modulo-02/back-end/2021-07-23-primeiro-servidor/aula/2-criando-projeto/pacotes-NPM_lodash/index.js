console.log('Oi!');

const lodash = require('lodash');

const lista = [1, 2, 3, 4, 5, 'aaaa'];

console.log(lodash.reverse(lista)); // inverte a ordem

const { shuffle } = require('lodash');

console.log(shuffle(lista)); // ordem aleatória