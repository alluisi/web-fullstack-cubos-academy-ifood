const cepInput = document.querySelector("#cep");
const ufInput = document.querySelector("#uf");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", function () {
    if (cepInput.value.length !== 8) {
        console.log("ERRO");
        return;
    };

    const promessaResposta = fetch(`https://viacep.com.br/ws/${cepInput.value}/json`);

    promessaResposta.then(function (resposta) {
        if (!resposta.ok) {
            console.log("ERRO");
            return;
        };

        const promessaBody = resposta.json();

        promessaBody.then(function (body) {
            if (body.erro) {
                console.log("ERRO");
                return;
            };

            ufInput.value = body.uf;
            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});