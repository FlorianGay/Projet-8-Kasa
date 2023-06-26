import { Link } from "react-router-dom"
import '../../styles/pages/_error.scss'

function Error() {
    return (
        <div className="error_contain">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="error_contain_link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error