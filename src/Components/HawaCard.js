import HawaMahal from '../Components/imagesForWebsite/hawaMahal.jpg';

function HawaCard () {
    return (
        <div className="card" id="hawaCard">
            <img alt="The Hawa Mahal" src={HawaMahal}/>
        </div>
    );
}

export default HawaCard;