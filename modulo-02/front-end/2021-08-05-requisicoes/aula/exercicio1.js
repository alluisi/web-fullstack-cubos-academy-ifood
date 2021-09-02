const criptoInput = document.querySelector("#cripto");
const valor = document.querySelector(".valor");

criptoInput.addEventListener("change", function () {
    if (!criptoInput.value) {
        return;
    };

    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${criptoInput.value}/ticker`);

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            valor.textContent = Number(body.ticker.high).toFixed(2);
        });
    });
});