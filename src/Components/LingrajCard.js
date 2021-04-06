import LingrajImg from '../Components/imagesForWebsite/lingarajTemple.jpg';

function LingrajCard (props) {
    return (
        <div className="card" id="lingrajCard" onClick={props.buttonClick}>
            <img alt="The Lingraj Temple" src={LingrajImg}/>
        </div>
    );
}

export default LingrajCard;