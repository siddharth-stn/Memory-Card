import IndiaGate from '../Components/imagesForWebsite/indiaGate.jpg';

function IndiaCard (props) {
    return (
        <div className="card" id="indiaCard" onClick={props.buttonClick}>
            <img alt="The India Gate" src={IndiaGate}/>
        </div>
    );
}

export default IndiaCard;