let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function formatarDados(ident, pessoa, contato, setor) {
    identificador = ident.padStart(6, "0");
    console.log(identificador);

    pessoa = pessoa.toLowerCase();
    pessoa = pessoa.split(" ");
    let nomeCorrigido = [];

    for (let item of pessoa) {
        let maiuscula = item[0];
        maiuscula = maiuscula.toUpperCase();
        item = item.replace(item[0], maiuscula);
        nomeCorrigido.push(item);
    }

    nomeCorrigido = nomeCorrigido.join(" ");
    console.log(nomeCorrigido);

    contato = contato.trim();
    console.log(contato);

    setor = setor.join(", ");
    console.log(setor);
}

formatarDados(identificador, nome, email, tags);