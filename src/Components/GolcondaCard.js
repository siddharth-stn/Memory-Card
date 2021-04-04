import React from 'react';
import GolcondaImg from '../Components/imagesForWebsite/golkondaFort.jpg';

function GolcondaCard () {
    return (
        <div className="card" id="cardOne">
            <img alt="The Ellora Caves" src={GolcondaImg}/>
        </div>
    );
}

export default GolcondaCard;