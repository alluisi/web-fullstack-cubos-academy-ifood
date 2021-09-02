const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', function (event) {
        const inputModificado = event.target;
        if (inputModificado.id === 'quiz-1') {
            if (inputModificado.value === '4') {
                inputModificado.classList.add('acerto');
            }
        } else if (inputModificado.id === 'quiz-2') {
            if (inputModificado.value === '4') {
                inputModificado.classList.add('acerto');
            }
        } else if (inputModificado.id === 'quiz-3') {
            if (inputModificado.value === '9') {
                inputModificado.classList.add('acerto');
            }
        } else {
            if (inputModificado.value === '2') {
                inputModificado.classList.add('acerto');
            }
        }
    });
});