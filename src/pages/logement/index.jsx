import Slideshow from '../../components/slideshow'
import logementList from '../../datas/logements.json'
import { useLocation } from 'react-router-dom'

function Logement() {
    const location = useLocation()
    const locationId = location.pathname.split('/').at(-1)
    const logementListFiltered = logementList.filter((list) => list.id.includes(locationId))
    return (
        <div>
            {logementListFiltered.map((list) => 
                <Slideshow 
                    img = {list.pictures}
                    length = {list.pictures.length}
                />
            )}
            
        </div>
    )
}

export default Logement