import React, { useState } from "react";
import ElloraCard from "./Components/ElloraCard";
import GolcondaCard from "./Components/GolcondaCard";
import HawaCard from "./Components/HawaCard";
import IndiaCard from "./Components/IndiaCard";
import JaisalCard from "./Components/JaisalCard";
import KhajurahoCard from "./Components/KhajurahoCard";
import LingrajCard from "./Components/LingrajCard";
import MahabodhiCard from "./Components/MahabodhiCard";
import MeenakshiCard from "./Components/MeenakshiCard";
import QutubCard from "./Components/QutubCard";
import SunCard from "./Components/SunCard";
import TajCard from "./Components/TajCard";
import "../src/App.css";

function App() {
  let cardDispArray = [];
  async function getRandomArray() {
    cardDispArray = [];
    let random;
    let compArray = [
      <ElloraCard buttonClick={cardClick} />,
      <GolcondaCard buttonClick={cardClick} />,
      <HawaCard buttonClick={cardClick} />,
      <IndiaCard buttonClick={cardClick} />,
      <JaisalCard buttonClick={cardClick} />,
      <KhajurahoCard buttonClick={cardClick} />,
      <LingrajCard buttonClick={cardClick} />,
      <MahabodhiCard buttonClick={cardClick} />,
      <MeenakshiCard buttonClick={cardClick} />,
      <QutubCard buttonClick={cardClick} />,
      <SunCard buttonClick={cardClick} />,
      <TajCard buttonClick={cardClick} />,
    ];

    while (compArray.length > 0) {
      random = Math.floor(Math.random() * compArray.length);
      let term = compArray.splice(random, 1);
      cardDispArray.push(...term);
    }
  }

  function youLost () {
    alert("Sorry, you have lost the game. Restart and Try again!");
    document.location.reload("");
  }

  getRandomArray();

  let display = cardDispArray.map((element) => (
    <div key={element.type.name}>{element}</div>
  ));
  const [makeDisplay, setMakeDisplay] = useState(display);
  const [count, setCount] = useState(0);
  const [cardName, setCardName] = useState([]);

  function addScore(e) {
    if (e.target.alt) {
      if (!cardName.includes(e.target.alt)) {
        setCardName((oldArray) => {
          return [...oldArray, e.target.alt];
        });
        setCount(count + 1);
      } else {
        youLost();
      } 
    }
  }

  function cardClick() {
    getRandomArray();
    setMakeDisplay([
      ...cardDispArray.map((element) => (
        <div key={element.type.name}>{element}</div>
      )),
    ]);
  }

  return (
    <div className="wrapDiv">
      <div id="scoreKeepDiv">
        <label>
          Score: <h2 id="theScore">{count}</h2>
        </label>
      </div>
      <div id="titleDiv">
        <h1>The Memory Card</h1>
      </div>
      <div className="cardStack" onClick={addScore}>
        {makeDisplay}
      </div>
    </div>
  );
}

export default App;
