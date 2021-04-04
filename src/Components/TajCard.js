import TajImg from '../Components/imagesForWebsite/tajMahal.jpg';

function TajCard () {
    return (
        <div className="card" id="tajCard">
            <img alt="The Taj Mahal" src={TajImg}/>
        </div>
    );
}

export default TajCard;