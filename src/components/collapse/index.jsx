import arrowUp from '../../assets/Arrow up.jpg'
import '../../styles/layout/_collapse.scss'
import { useState } from 'react'

function Collapse(props) {

    const [isOpen, setIsOpen] = useState('false');
    const [className, setClassName] = useState('');
    console.log(isOpen)

    const collapseOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
        setClassName(prevClassName => 
            prevClassName.includes('collapse_description_open')
            ? prevClassName.replace('collapse_description_open', '')
            : prevClassName + 'collapse_description_open'
        );
    }
    
    return (
        <div>
            <div className="collapse">
                <div className="collapse_title">
                    <h2>{props.title}</h2>
                    <img src={arrowUp} alt='Flèches vers le haut' onClick={collapseOpen} />
                </div>
                <div className={`collapse_description ${className}`}>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Collapse