const axios = require("axios");

/*
function obterLogradouro(cep) {
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const logradouroPromise = responsePromise.then((response) => response.data.logradouro);
    return logradouroPromise;
};

obterLogradouro("40140650").then((logradouro) => console.log(logradouro));
obterLogradouro("01001000").then((logradouro) => console.log(logradouro));
*/

async function obterLogradouro2(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data.logradouro;
};

// obterLogradouro2("40140650").then((logradouro) => console.log(logradouro));

async function exibirLogradouros(ceps) {
    for (const cep of ceps) {
        console.log(cep, "=>", await obterLogradouro2(cep));
    }
};

exibirLogradouros(["40140650", "01001000"]);