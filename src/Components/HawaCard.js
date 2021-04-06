import HawaMahal from '../Components/imagesForWebsite/hawaMahal.jpg';

function HawaCard (props) {
    return (
        <div className="card" id="hawaCard" onClick={props.buttonClick}>
            <img alt="The Hawa Mahal" src={HawaMahal}/>
        </div>
    );
}

export default HawaCard;