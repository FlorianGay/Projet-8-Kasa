import Slideshow from '../../components/slideshow'
import LogementDescription from '../../components/logement_description'
import Collapse from '../../components/collapse'
import logementList from '../../datas/logements.json'
import {useLocation} from 'react-router-dom'
import '../../styles/pages/_logements.scss'

function Logement() {
    const location = useLocation()
    const locationId = location.pathname.split('/').at(-1)
    const logementListFiltered = logementList.filter((list) => list.id.includes(locationId))
    return (
        <div>
            {logementListFiltered.map((list, index) =>
                <div key={index}>
                    <Slideshow
                        img={list.pictures}
                        length={list.pictures.length}
                    />
                    <LogementDescription
                        title={list.title}
                        location={list.location}
                        hostName={list.host.name}
                        hostImg={list.host.picture}
                        logementListTags={list.tags}
                        rating={list.rating}
                    />
                    <div className="logement_collapse">
                        <Collapse
                            title={'Description'}
                            description={list.description}
                        />
                        <Collapse
                            title={'Equipements'}
                            description={list.equipments}
                        />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Logement