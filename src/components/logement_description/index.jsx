import stars from '../../assets/stars.svg'
import '../../styles/layout/_logement_description.scss'

function LogementDescription(props) {
    const logementListTags = props.logementListTags;
    const listTags = logementListTags.map((tags) => <li key={tags.toString()}>{tags}</li>)

    return (
        <div className='logement_description_contain'>
            <div className="logement_title">
                <h1>{props.title}</h1>
                <h3>{props.location}</h3>
            </div>
            <div className="logement_host">
                <h3>{props.hostName}</h3>
                <img src={props.hostImg} alt="Profile du host" className="logement_host_img"/>
            </div>
            <div >
                <ul className="logement_tags">{listTags}</ul>
            </div>
            <div className="logement_rating">
                <img src={stars} alt='Logo étoiles' />
                <img src={stars} alt='Logo étoiles' />
                <img src={stars} alt='Logo étoiles' />
                <img src={stars} alt='Logo étoiles' />
                <img src={stars} alt='Logo étoiles' />
            </div>
        </div>
        
    )
}

export default LogementDescription