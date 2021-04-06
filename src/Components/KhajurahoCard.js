import KhajurahoImg from '../Components/imagesForWebsite/khajurahoTemple.jpeg';

function KhajurahoCard (props) {
    return (
        <div className="card" id="khajurahoCard" onClick={props.buttonClick}>
            <img alt="Temple at Khajuraho" src={KhajurahoImg}/>
        </div>
    );
}

export default KhajurahoCard;