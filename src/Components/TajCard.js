import TajImg from '../Components/imagesForWebsite/tajMahal.jpg';

function TajCard (props) {
    return (
        <div className="card" id="tajCard" onClick={props.buttonClick}>
            <img alt="The Taj Mahal" src={TajImg}/>
        </div>
    );
}

export default TajCard;