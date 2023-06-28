import arrowLeft from '../../assets/arrow left.png';
import arrowRight from '../../assets/arrow right.png';
import '../../styles/layout/_slideshow.scss';
import { useState } from 'react';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState('0');
    const slideRight = () => {
        setCurrentIndex((currentIndex + 1) % props.length )
    }
    const slideLeft = () => {
        setCurrentIndex((currentIndex - 1 + props.length) % props.length)
    }
    return (
        
            <div className="slideshow">
            <img src={arrowLeft} alt="Flèche gauche" className="arrow arrow_left" onClick={slideLeft}/>
            <img src={arrowRight} alt="Flèche droite" className="arrow arrow_right" onClick={slideRight}/>
            <img src={`${props.img[currentIndex]}`} alt="Carrousel des photos du logement" className="slideshow_img" />
            <span className="slideshow_img_position">{currentIndex}/{props.length}</span>
        </div>
        
            
        
    )
}

export default Slideshow