
import '../../styles/layout/_banner.scss'

function Banner (props) {
    return (
        <div className="banner">
            <img src={props.bannerImg} alt='fond de la bannière' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner