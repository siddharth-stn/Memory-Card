import SunImg from '../Components/imagesForWebsite/sunTemple.jpg';

function SunCard () {
    return (
        <div className="card" id="sunCard">
            <img alt="The Sun Temple" src={SunImg}/>
        </div>
    );
}

export default SunCard;