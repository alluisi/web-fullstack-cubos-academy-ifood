const menuButton = document.querySelector(".side-menu__button--open");
const menuButtonImage = document.querySelector(".side-menu__button img");
const sideMenu = document.querySelector(".side-menu");
const galleryItems = document.querySelectorAll('.item__image');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const modalPreviousButton = document.querySelector('.modal__button--previous');
const modalNextButton = document.querySelector('.modal__button--next');
const modalCloseButton = document.querySelector('.modal__button--close');
const modalLike = document.querySelector('.modal__like');

let currentImage = 0;
let liked = [];

menuButton.addEventListener("click", function () {
    sideMenu.classList.toggle("side-menu--closed");

    menuButtonImage.src = sideMenu.classList.contains("side-menu--closed") ? "./assets/closed-menu.svg" : "./assets/open-menu.svg";
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

function updateModalImg(src) {
    modalImage.src = src;
};

function updateModalButtons() {
    modalPreviousButton.classList.remove('hidden');
    modalNextButton.classList.remove('hidden');

    if (currentImage === 0) {
        modalPreviousButton.classList.add('hidden');
    }

    if (currentImage === 9) {
        modalNextButton.classList.add('hidden');
    }
};

galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        modal.classList.remove('hidden');
        currentImage = Number(event.target.dataset.index);

        if (liked.includes(currentImage)) {
            modalLike.classList.remove('hidden');
        } else {
            modalLike.classList.add('hidden');
        }

        updateModalImg(event.target.src);
        updateModalButtons();
    });

    const itemLike = item.previousElementSibling;
    if (liked.includes(item.dataset.index)) {
        itemLike.classList.remove('hidden');
    } else {
        itemLike.classList.add('hidden');
    }
});


modalImage.addEventListener('click', (event) => {
    event.stopPropagation();
});

modalImage.addEventListener('dblclick', () => {
    const itemLike = galleryItems[currentImage].previousElementSibling;

    if (liked.includes(currentImage)) {
        liked = liked.filter(like => like !== currentImage);
        itemLike.classList.add('hidden');
        modalLike.classList.add('hidden');
    } else {
        liked.push(currentImage);
        itemLike.classList.remove('hidden');
        modalLike.classList.remove('hidden');
    }
});

function updateModalLike() {
    if (liked.includes(currentImage)) {
        modalLike.classList.remove('hidden');
    } else {
        modalLike.classList.add('hidden');
    }
}

modalPreviousButton.addEventListener('click', (event) => {
    event.stopPropagation();

    currentImage--;
    const image = galleryItems[currentImage];
    updateModalImg(image.src);
    updateModalButtons();
    updateModalLike();
});

modalNextButton.addEventListener('click', (event) => {
    event.stopPropagation();

    currentImage++;

    const image = galleryItems[currentImage];
    updateModalImg(image.src);
    updateModalButtons();
    updateModalLike();
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});