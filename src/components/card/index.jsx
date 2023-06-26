import {Link} from 'react-router-dom'
import LogementData from '../../datas/logements.json'
import '../../styles/layout/_card.scss'

function Card () {
    const logementList = LogementData.slice(0, 6);
    return (
            <div className='gallery'>
                {
                    logementList.map((list) => 
                        <Link to={`/logement/${list.id}`} key={list.id}>
                            <figure className='gallery_card'>
                                <img src={list.cover} alt='Représentation du logement' />
                                <figcaption className='gallery_card_title'>{list.title}</figcaption>
                            </figure>
                        </Link>
                    )
                }
            </div>
    )
}

export default Card