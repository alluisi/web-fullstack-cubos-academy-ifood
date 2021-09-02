const body = document.querySelector('body');
const themeButton = document.querySelector('.light');

const temaInicial = localStorage.getItem('tema');
themeButton.textContent = temaInicial === 'claro' ? '🌞' : '🌛';
body.style.setProperty('--cor-de-fundo', temaInicial === 'claro' ? '#FFF' : '#000');
body.style.setProperty('--cor-de-texto', temaInicial === 'claro' ? '#000' : '#FFF');

themeButton.addEventListener('click', function () {
    themeButton.textContent = themeButton.textContent === '🌞' ? '🌛' : '🌞';

    localStorage.setItem('tema', temaInicial === 'claro' ? 'escuro' : 'claro');

    const novaCorDeFundo = body.style.getPropertyValue('--cor-de-fundo') === '#000' ? '#FFF' : '#000';
    body.style.setProperty('--cor-de-fundo', novaCorDeFundo);

    const novaCorDeTexto = body.style.getPropertyValue('--cor-de-texto') === '#FFF' ? '#000' : '#FFF';
    body.style.setProperty('--cor-de-texto', novaCorDeTexto);
});