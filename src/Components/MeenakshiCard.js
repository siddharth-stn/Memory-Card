import MeenakshiImg from '../Components/imagesForWebsite/meenakshiTemple.jpeg';

function MeenakshiCard (props) {
    return (
        <div className="card" id="meenakshiCard" onClick={props.buttonClick}>
            <img alt="The Meenakshi Temple" src={MeenakshiImg}/>
        </div>
    );
}

export default MeenakshiCard;