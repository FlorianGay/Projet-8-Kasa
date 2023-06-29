import '../../styles/layout/_logement_description.scss'
import Stars from "../../assets/icons/Stars";

function LogementDescription(props) {
    const logementListTags = props.logementListTags;
    const listTags = logementListTags.map((tags) => <li key={tags.toString()}>{tags}</li>)

    const displayStars = (rating) => {
        const array = [];
        for (let i = 0; i < 5; i++) {
            array.push(i < rating
                ? <Stars className={'red'}/>
                : <Stars className={'gray'}/>
            )
        }
        return array;
    }

    return (
        <div className='logement_description_contain'>
            <div className="title_and_tags">
                <div className="logement_title">
                    <h1>{props.title}</h1>
                    <h3>{props.location}</h3>
                </div>
                <div>
                <   ul className="logement_tags">{listTags}</ul>
                </div>
            </div>
            <div className="host_and_rate">
                <div className="logement_host">
                    <h3>{props.hostName}</h3>
                    <img src={props.hostImg} alt="Profile du host" className="logement_host_img"/>
                </div>
                <div className="logement_rating">
                    {displayStars(props.rating)}
                </div>
            </div>
        </div>
    )
}

export default LogementDescription