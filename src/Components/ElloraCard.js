import ElloraImg from '../Components/imagesForWebsite/elloraCaves.jpeg';

function ElloraCard (props) {
    return (
        <div className="card" id="elloraCard" onClick={props.buttonClick}>
            <img alt="The Ellora Caves" src={ElloraImg}/>
        </div>
    );
}

export default ElloraCard;