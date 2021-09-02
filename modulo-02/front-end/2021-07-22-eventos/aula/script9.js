const botaoInscrever = document.querySelector('.btn');
const modal = document.querySelector('.modal');

botaoInscrever.addEventListener('click', inscrever);

function inscrever(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = 'INSCRITO';
    botaoClicado.classList.add('inscrito');

    botaoClicado.removeEventListener('click', inscrever);
    botaoClicado.addEventListener('click', function () {
        modal.classList.remove('escondido');
    });
};