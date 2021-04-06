import JaisalImg from '../Components/imagesForWebsite/jaisalmerFort.jpg';

function JaisalCard (props) {
    return (
        <div className="card" id="jaisalCard" onClick={props.buttonClick}>
            <img alt="The Jaisalmer Fort" src={JaisalImg}/>
        </div>
    );
}

export default JaisalCard;