/* NO ESCURINHO DO CINEMA
Você ficou responsável por desenvolver o software do cinema, que indica se uma pessoa pode ter acesso ao filme. Além disso, o programa verifica se a pessoa tem direito a meia entrada ou se o ingresso deve ser inteira.

Para ter acesso ao filme, a pessoa deve atender os seguintes requisitos:

Ter ingresso
Ter idade igual ou superior a censura ou estar acompanhada dos pais
Uma vez determinado que a pessoa pode ter acesso, é necessário verificar se ela tem direito a meia. Para isso, ela precisa atender a pelo menos uma das condições abaixo:

Ter carteirinha de estudante
Ter menos de 18 anos
Input Format

A entrada será sempre um objeto, com os dados necessários para a análise, no seguinte formato:

{
    temIngresso: true,
    idade: 23,
    temCarteirinha: true,
    censura: 16,
    estaComPais: false
}
Output Format

A saída deverá ser sempre uma das três opções abaixo:

ACESSO NEGADO caso a pessoa não possa ter acesso ao filme
INTEIRA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de inteira
MEIA caso a pessoa tenha acesso ao filme mediante apresentação de ingresso de meia entrada
Sample Input 0

 {
    "temIngresso": true,
    "idade": 23,
    "temCarteirinha": true,
    "censura": 16,
    "estaComPais": true
  }
Sample Output 0

MEIA
*/

function solucao(obj) {
    if (obj.temIngresso == true && (obj.idade >= obj.censura || obj.estaComPais == true)) {
        if (obj.temCarteirinha == true || obj.idade < 18) {
            console.log("MEIA");
        } else {
            console.log("INTEIRA");
        }
    } else {
        console.log("ACESSO NEGADO");
    }
}

solucao({
    "temIngresso": true,
    "idade": 23,
    "temCarteirinha": true,
    "censura": 16,
    "estaComPais": true
});