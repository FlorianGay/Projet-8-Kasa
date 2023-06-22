import Logobw from '../../assets/logo_b&w.png'
import '../../styles/layout/_footer.scss'

function Footer () {
    return (
        <footer>
            <img src={Logobw} alt='Logo de Kasa' />
            <h2>© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
    
}

export default Footer