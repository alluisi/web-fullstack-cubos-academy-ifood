/* MOBILAPP
Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

A lógica é a seguinte:

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, indepententemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

Neste caso, a viagem custará:

2 reais por quilômetro, caso a distância seja menor que 100km
1,50 reais por quilômetro, caso a distância seja 100km ou mais
Input Format

A entrada será composta por dois parâmetros:

tempo sempre dado em minutos
distancia sempre dada em quilômetros.
Output Format

Imprima na tela o preço total a ser pago pelo usuário, EM CENTAVOS. Lembre-se de que 1 real equivalem a 100 centavos.

Sample Input 0

  {
    "tempo": 2,
    "distancia": 1
  }
Sample Output 0

600
*/

function solucao(tempo, distancia) {

    let valor = 0;

    if (tempo < 5) {
        valor = 600;
    } else if (tempo >= 5 && tempo <= 60) {
        valor = (100 * tempo) + (50 * distancia);
    } else if (tempo > 60) {
        if (distancia < 100) {
            valor = 200 * distancia;
        } else {
            valor = 150 * distancia;
        }
    }
    console.log(valor);
}

solucao(2, 1);