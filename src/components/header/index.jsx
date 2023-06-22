import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/layout/_header.scss'

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo de Kasa'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header