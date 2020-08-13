import React from 'react';
import './App.css';
import Game from './components/game/Game';
import AllBlacks from '../src/assets/images/Fern.png';
import Warriors from '../src/assets/images/warriors.jpeg';
import BlackCaps from '../src/assets/images/cricket.jpeg';
import Kiwi from '../src/assets/images/kiwi.jpeg';

function App(props) {

  const warriors = {
    name: 'Warriors',
    logoSrc: Warriors
  }

  const allblacks = {
    name: 'AllBlacks',
    logoSrc: AllBlacks
  }


  const blackcaps = {
    name: 'BlackCaps',
    logoSrc: BlackCaps
  }

  const kiwi = {
    name: 'Kiwi',
    logoSrc: Kiwi
  }

  return (
    <div className="App">
      <Game
        venue="Auckland Arena"
        homeTeam={warriors}
        visitingTeam={allblacks}
      />

      <Game
        venue="Wellington Bowl"
        homeTeam={kiwi}
        visitingTeam={blackcaps}
      />
    </div>
  )
}

export default App;