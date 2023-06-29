import arrowUp from '../../assets/Arrow up.jpg'
import '../../styles/layout/_collapse.scss'
import {useState} from 'react'

function Collapse(props) {

    const [isOpen, setIsOpen] = useState('false');
    const [className, setClassName] = useState('');
    const [classNameImg, setClassNameImg] = useState('')
    console.log(isOpen)
    const collapseOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
        setClassName(prevClassName =>
            prevClassName.includes('collapse_description_open')
                ? prevClassName.replace('collapse_description_open', '')
                : prevClassName + 'collapse_description_open'
        );
    }
    const imgOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
        setClassNameImg(prevClassNameImg =>
            prevClassNameImg.includes('img_open')
                ? prevClassNameImg.replace('img_open', '')
                : prevClassNameImg + 'img_open'
        );
    }

    const open = event => {
        collapseOpen();
        imgOpen();
    }

    return (
        <div className="collapse">
            <div className="collapse_title">
                <h2>{props.title}</h2>
                <img src={arrowUp} alt='Flèches vers le haut' className={classNameImg} onClick={open}/>
            </div>
            <div className={`collapse_description ${className}`}>
                {
                    Array.isArray(props.description)
                        ? (<ul>
                                {props.description.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <span>{props.description}</span>
                        )
                }
            </div>
        </div>
    )
}

export default Collapse