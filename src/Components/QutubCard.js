import QutubImg from '../Components/imagesForWebsite/qutubMinar.jpg';

function QutubCard () {
    return (
        <div className="card" id="qutubCard">
            <img alt="The Qutub Minar" src={QutubImg}/>
        </div>
    );
}

export default QutubCard;