const axios = require("axios");

const cepPromise = axios.get("https://viacep.com.br/ws/01001000/json/");

cepPromise.then(response => {
    console.log(response.data);
});

console.log(cepPromise); // Promise { <pending> }