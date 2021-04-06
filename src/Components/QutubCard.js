import QutubImg from '../Components/imagesForWebsite/qutubMinar.jpg';

function QutubCard (props) {
    return (
        <div className="card" id="qutubCard" onClick={props.buttonClick}>
            <img alt="The Qutub Minar" src={QutubImg}/>
        </div>
    );
}

export default QutubCard;