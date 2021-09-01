// PROCURAR

const nomes = ['Leo', 'Juninho', 'Binho', 'Nanda'];

// console.log(nomes.find(item => item === 'Binho'));


// console.log(nomes.find(item => item === 'Juliana'));


const objetos = [
    {
        id: 1,
        nomeProduto: 'Batata'
    },
    {
        id: 2,
        nomeProduto: 'Feijão'
    },
    {
        id: 3,
        nomeProduto: 'Batata'
    }
]

// let produtoEncontrado = objetos.find(item => item.id === 1);
// let produtoEncontrado = objetos.find(item => item.id === 2);

// let produtoEncontrado = objetos.find(item => item.nomeProduto === 'Batata');
// let produtoEncontrado = objetos.find(item => item.nomeProduto === 'Feijão');

// quero encontrar ONDE a propriedade nomeProduto do ITEM seja igual a 'Bolacha'
// let produtoEncontrado = objetos.find(item => item.nomeProduto === 'Bolacha');


// let produtoEncontrado = objetos.find(item => item.nomeProduto.substr(2, 2) === 'la');
// let produtoEncontrado = objetos.find(item => item.nomeProduto.substr(2, 2) === 'ta');
let produtoEncontrado = objetos.find(item => item.nomeProduto.includes('ta'));

console.log(produtoEncontrado);