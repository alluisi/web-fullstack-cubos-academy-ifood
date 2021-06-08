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