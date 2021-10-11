import closeModal from '../assets/close-modal.svg';
import setaPrev from '../assets/prev.svg';
import like from '../assets/like.svg';
import setaNext from '../assets/next.svg'

export const Modal = () => {
    return (
        <div class="modal hidden flex-row justify-center align-center">
            <button class="modal__button modal__button--close">
                <img src={closeModal} alt="Fechar modal" />
            </button>
            <div class="modal__container flex-row align-center">
                <img class="modal__button modal__button--previous" src={setaPrev} alt="Anterior" />
                <img class="modal__image" />
                <img class="modal__like hidden" src={like} alt="Like" />
                <img class="modal__button modal__button--next" src={setaNext} alt="Próximo" />
            </div>
        </div>
    )
}