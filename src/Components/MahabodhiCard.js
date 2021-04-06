import MahabodhiImg from '../Components/imagesForWebsite/mahabodhiTemple.jpg';

function MahabodhiCard (props) {
    return (
        <div className="card" id="mahabodhiCard" onClick={props.buttonClick}>
            <img alt="The Mahabodhi Temple" src={MahabodhiImg}/>
        </div>
    );
}

export default MahabodhiCard;