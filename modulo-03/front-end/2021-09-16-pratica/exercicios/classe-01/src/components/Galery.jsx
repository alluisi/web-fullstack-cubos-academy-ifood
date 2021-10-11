import hamster from '../assets/gallery/image 1.png';
import gato from '../assets/gallery/image 2.png';
import lobo from '../assets/gallery/image 3.png';
import macaco from '../assets/gallery/image 4.png';
import borboleta from '../assets/gallery/image 5.png';
import leopardo from '../assets/gallery/image 6.png';
import raposa from '../assets/gallery/image 7.png';
import raposaBranca from '../assets/gallery/image 8.png';
import tartaruga from '../assets/gallery/image 9.png';
import leao from '../assets/gallery/image 10.png';
import like from '../assets/like.svg';

export const Galery = () => {
    const animais = [
        {
            alt: 'hamster',
            url: hamster
        },
        {
            alt: 'gato',
            url: gato
        },
        {
            alt: 'lobo',
            url: lobo
        },
        {
            alt: 'macaco',
            url: macaco
        },
        {
            alt: 'borboleta',
            url: borboleta
        },
        {
            alt: 'leopardo',
            url: leopardo
        },
        {
            alt: 'raposa',
            url: raposa
        },
        {
            alt: 'raposaBranca',
            url: raposaBranca
        },
        {
            alt: 'tartaruga',
            url: tartaruga
        },
        {
            alt: 'leao',
            url: leao
        }
    ]

    return (
        <>
            {animais.map(function (photo, index) {
                return (
                    <div className="galery__item">
                        <img className="item__like hidden" src={like} alt="Like" />
                        <img className="item__image" src={photo.url} alt={photo.alt} key={`photo${index}`} />
                        <div className="flex-row justify-between mt-20">
                            <span>Lorem ipsum</span>
                            <span>há 1 mês</span>
                        </div>
                    </div>
                )
            })}
        </>
    )
}