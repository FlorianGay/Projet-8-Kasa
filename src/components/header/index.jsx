import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/layout/_header.scss'

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo de Kasa' />
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='../../pages/propos/index.jsx'>A propos</Link>
            </nav> 
        </header>
        
    )
}

export default Header