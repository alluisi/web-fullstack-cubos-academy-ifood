const axios = require("axios");

const instanciaAxios = axios.create({
    baseURL: "https://companyenrichment.abstractapi.com/v1/",
    params: {
        api_key: "34a8499969c4401daf6a685935323c1d",
    }
});

module.exports = instanciaAxios;