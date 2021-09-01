// O que é uma função?
// Bloco de código que executa tarefa específica ou calcula um valor

// Como criar uma função
function nomeDaFuncao() {
    
}

/* ----------------------------------------------- */

// Função sem argumento e sem retorno
function funcaoSemArgumento() {
    console.log("Bom dia!");
    //return;
    console.log("Hoje é o seu dia de ter revisão de backend");
    console.log("Na revisão de backend.......");

    // "return;" NA ÚLTIMA LINHA da função é o mesmo que nada,
    // porque não vai retornar nada e vai sair da função, o que
    // já seria feito normalmente sem o "return;"
    //return;
}

//console.log(funcaoSemArgumento);
// funcaoSemArgumento();
// funcaoSemArgumento();
// funcaoSemArgumento();

// undefined porque é função sem retorno
//console.log(funcaoSemArgumento());

/* ----------------------------------------------- */

// Função com argumento e sem retorno
function funcaoComArgumentoESemRetorno(nome, sobrenome) {
    if (nome && sobrenome) {
        console.log(`Bom dia ${nome} ${sobrenome}!`);
    }
    else {
        console.log('Bom dia!');
    }

    //return;
}

// funcaoComArgumentoESemRetorno('Leo', 'Silva');
// funcaoComArgumentoESemRetorno('Maria', 'Souza');
// funcaoComArgumentoESemRetorno('Roberto', 'Ferreira');

//console.log(funcaoComArgumentoESemRetorno('Leo', 'Ramos'));

/* ----------------------------------------------- */

// Função com argumento e com retorno

function funcaoComArgumentoEComRetorno(operando1, operando2) {
    return operando1 + operando2;
}

const resultadoDaSoma = funcaoComArgumentoEComRetorno(5, 15);

funcaoComArgumentoEComRetorno(5, 15);

const resultadoDaSegundaSoma = funcaoComArgumentoEComRetorno(resultadoDaSoma, 10);

// console.log(resultadoDaSoma);
// console.log(resultadoDaSegundaSoma);

// imprimindo o RETORNO da função
// console.log(funcaoComArgumentoEComRetorno(1, 2));
// console.log(funcaoComArgumentoEComRetorno('Leo ', 'Ramos'));

// Função sem argumento e com retorno

function funcaoSemArgumentoEComRetorno() {
    return 'Bom dia!';
}

// imprimindo o RETORNO da função
// console.log(funcaoSemArgumentoEComRetorno());
// console.log(funcaoSemArgumentoEComRetorno());
// console.log(funcaoSemArgumentoEComRetorno());