const criptoInput = document.querySelector("#cripto");
const valor = document.querySelector(".valor");
const quantidade = document.querySelector(".quantidade");
const oferta = document.querySelector(".oferta");

criptoInput.addEventListener("change", function () {
    if (!criptoInput.value) {
        return;
    };

    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/ticker`);

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valor.textContent = Number(body.ticker.high).toFixed(2);
            quantidade.textContent = Number(body.ticker.vol).toFixed(2);
            oferta.textContent = Number(body.ticker.buy).toFixed(2);
        });
    });
});