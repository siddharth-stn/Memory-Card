import React from 'react';
import ElloraCard from './Components/ElloraCard';
import GolcondaCard from './Components/GolcondaCard';
import HawaCard from './Components/HawaCard';
import IndiaCard from './Components/IndiaCard';
import JaisalCard from './Components/JaisalCard';
import KhajurahoCard from './Components/KhajurahoCard';
import LingrajCard from './Components/LingrajCard';
import MahabodhiCard from './Components/MahabodhiCard';
import MeenakshiCard from './Components/MeenakshiCard';
import QutubCard from './Components/QutubCard';
import SunCard from './Components/SunCard';
import TajCard from './Components/TajCard';
import '../src/App.css';

function App() {
  return (
    <div className="cardStack">
      <ElloraCard/>
      <GolcondaCard/>
      <HawaCard/>
      <IndiaCard/>
      <JaisalCard/>
      <KhajurahoCard/>
      <LingrajCard/>
      <MahabodhiCard/>
      <MeenakshiCard/>
      <QutubCard/>
      <SunCard/>
      <TajCard/>
    </div>
    
  );
}

export default App;
