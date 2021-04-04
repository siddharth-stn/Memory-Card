import React from 'react';
import ElloraImg from '../Components/imagesForWebsite/elloraCaves.jpeg';

function ElloraCard () {
    return (
        <div className="card" id="cardOne">
            <img alt="The Ellora Caves" src={ElloraImg}/>
        </div>
    );
}

export default ElloraCard;