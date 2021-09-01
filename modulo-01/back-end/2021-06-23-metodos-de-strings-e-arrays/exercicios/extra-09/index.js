const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function dividirGrupos(pessoas, quantidade) {
    let umaPessoa = [];
    let grupoNovo = [];
    let numeroDoGrupo = 1;
    for (i = 0; i < pessoas.length; i++) {
        umaPessoa = pessoas.slice(i, i + 1);
        grupoNovo.push(umaPessoa);
        if (grupoNovo.length === quantidade) {
            console.log(`Grupo ${numeroDoGrupo}: ${grupoNovo.join(", ")}.`);
            grupoNovo = [];
            numeroDoGrupo++;
        }
    }
    console.log(`Grupo ${numeroDoGrupo}: ${grupoNovo.join(", ")}.`);
}

dividirGrupos(nomes, tamanhoDoGrupo);