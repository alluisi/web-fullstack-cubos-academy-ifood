const cepInput = document.querySelector("#cep");
const cidadeInput = document.querySelector("#cidade");
const ruaInput = document.querySelector("#rua");

cepInput.addEventListener("change", function () {
    if (cepInput.value.length !== 8) {
        alert("O CEP precisa possuir 8 dígitos");
        return;
    };

    const promessaResposta = fetch(`https://viacep.com.br/ws/${cepInput.value}/json`);

    promessaResposta.then(function (resposta) {
        if (!resposta.ok) {
            alert("Não foi possível concluir. Tente novamente");
            return;
        };

        const promessaBody = resposta.json();

        promessaBody.then(function (body) {
            if (body.erro) {
                alert("Esse CEP não existe");
                return;
            };

            cidadeInput.value = body.localidade;
            ruaInput.value = body.logradouro;
        });
    });
});