import arrowUp from '../../assets/Arrow up.jpg'
import '../../styles/layout/_collapse.scss'

function Collapse(props) {
    return (
        <div>
            <div className="collapse">
                <div className="collapse_title">
                    <h2>{props.title}</h2>
                    <img src={arrowUp} alt='Flèches vers le haut' />
                </div>
                <div className="collapse_description">
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Collapse