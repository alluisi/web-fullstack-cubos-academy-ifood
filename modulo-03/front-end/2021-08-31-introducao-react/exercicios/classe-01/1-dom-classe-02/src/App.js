import './App.css';
import furniture from './assets/drawers.jpg';
import author from './assets/avatar-michelle.jpg';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <article className="card">
          <div className="card__img">
            <img src={furniture} alt="furniture" />
          </div>
          <div className="card__text-wrapper">
            <h1 className="card__heading">
              Mude a aparência geral adicionando esses toques maravilhosos aos móveis de sua
              casa
            </h1>
            <p className="card__paragraph">
              Já esteve em uma sala e sentiu como se algo estivesse faltando? Talvez um
              pouco vazia e convidativa. Tenho algumas dicas simples para tornar qualquer ambiente completo.
            </p>
            <div className="card__footer-wrapper">
              <img src={author} alt="author" className="author__img" />
              <div className="author__info">
                <div className="author__name">Michele Campos</div>
                <div className="author__date">28 Jun 2020</div>
              </div>
              <button onclick="mostrarPopup()" className="card__btn">
                <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                  <title>Seta</title>
                  <path d='M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z'
                    fill='none' />
                </svg>
              </button>
              <div className="popup">
                <div className="popup__text">compartilhar</div>
                <div className="popup__icons">
                  <a href="#">
                    <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                      <title>Logo Facebook</title>
                      <path
                        d='M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z'
                        fill-rule='evenodd' />
                    </svg>
                  </a>

                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox='0 0 20 17'
                      className='twitter'>
                      <title>Logo Twitter</title>
                      <path
                        d="M20 2.172a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.605.996A4.096 4.096 0 0013.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392 1a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.658a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 2.172z" />
                    </svg>
                  </a>

                  <a href="#">
                    <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                      <title>Logo Pinterest</title>
                      <path
                        d='M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;