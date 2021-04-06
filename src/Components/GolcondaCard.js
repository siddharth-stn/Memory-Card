import GolcondaImg from '../Components/imagesForWebsite/golkondaFort.jpg';

function GolcondaCard (props) {
    return (
        <div className="card" id="golcondaCard" onClick={props.buttonClick}>
            <img alt="The Golkonda Fort" src={GolcondaImg}/>
        </div>
    );
}

export default GolcondaCard;