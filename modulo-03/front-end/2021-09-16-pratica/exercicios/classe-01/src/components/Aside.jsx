import { useState } from 'react';

import closedMenu from '../assets/closed-menu.svg';
import activeHome from '../assets/active-home.svg';
import inactiveLike from '../assets/inactive-like.svg';
import inactiveSettings from '../assets/inactive-settings.svg';

export const Aside = () => {
    const [classe, setClasse] = useState('hidden');

    function abrirMenu() {
        const novaClasse = classe === 'hidden' ? '' : 'hidden';

        setClasse(novaClasse);
    }

    return (
        <aside className="side-menu flex-column">
            <button onClick={abrirMenu} className={`side-menu__button ${classe === 'hidden' ? '' : 'hidden'}`}>
                <img src={closedMenu} alt="Menu fechado" />
            </button>
            <button onClick={abrirMenu} className={`side-menu__button flex-row align-center ${classe === 'hidden' ? 'hidden' : ''}`}>
                <img src={activeHome} alt="Home" />
                <span className="font-color__white ml-25">Início</span>
            </button>
            <button onClick={abrirMenu} className="side-menu__button flex-row align-center">
                <img src={inactiveLike} alt="Favoritos" />
                <span className={`font-color__gray ml-25 ${classe === 'hidden' ? 'hidden' : ''}`}>Favoritos</span>
            </button>
            <button onClick={abrirMenu} className="side-menu__button flex-row align-center mt-auto">
                <img src={inactiveSettings} alt="Configurações" />
                <span className={`font-color__gray ml-25 ${classe === 'hidden' ? 'hidden' : ''}`}>Configurações</span>
            </button>
        </aside>
    )
}