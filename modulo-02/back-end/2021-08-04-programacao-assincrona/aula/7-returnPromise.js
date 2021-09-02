const axios = require("axios");

function obterLogradouro(cep) {
    const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const logradouroPromise = responsePromise.then((response) => response.data.logradouro);
    return logradouroPromise;
};

obterLogradouro("40140650").then((logradouro) => console.log(logradouro));
obterLogradouro("01001000").then((logradouro) => console.log(logradouro));