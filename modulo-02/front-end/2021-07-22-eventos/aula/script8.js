const botaoInscrever = document.querySelector('.btn');

botaoInscrever.addEventListener('click', function (event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');
});