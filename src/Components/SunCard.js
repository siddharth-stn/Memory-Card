import SunImg from '../Components/imagesForWebsite/sunTemple.jpg';

function SunCard (props) {
    return (
        <div className="card" id="sunCard" onClick={props.buttonClick}>
            <img alt="The Sun Temple" src={SunImg}/>
        </div>
    );
}

export default SunCard;