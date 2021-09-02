const frutas = document.querySelectorAll('li');

function buscarFruta(event) {
    if (!teclouEnter(event.code)) {
        return;
    }

    filtrarLista(frutas, event.target.value);

    limparInput(event.target);
}

function teclouEnter(tecla) {
    return tecla === 'Enter';
}

function filtrarLista(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove('escondido');
        if (filtro && item.textContent !== filtro) {
            item.classList.add('escondido');
        }
    });
}

function limparInput(input) {
    input.value = '';
}