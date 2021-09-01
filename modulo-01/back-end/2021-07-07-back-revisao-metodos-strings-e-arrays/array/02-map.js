// Mapeia (altera) cada item devolvendo todos alterados em um novo array
// Não altera array original: NÃO

const nomes = ['Leo', 'Juninho', 'Binho', 'Nanda'];

// const nomesAlterados = nomes.map(function (valorDoItem, indice) {
//     return `${(indice + 1).toString().padStart(2, '0')} - ${valorDoItem}`;
// });

// console.log(nomes);
// console.log(nomesAlterados);


// const nomesAlterados = nomes.map((valorDoItem, indice) => {
//     return `${(indice + 1).toString().padStart(2, '0')} - ${valorDoItem}`;
// });

// console.log(nomes);
// console.log(nomesAlterados);

const nomesAlterados = nomes.map((valorDoItem, indice) => 
    `${(indice + 1).toString().padStart(2, '0')} - ${valorDoItem}`
);

console.log(nomes);
console.log(nomesAlterados);