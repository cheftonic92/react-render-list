import { useState } from 'react';
import './App.css';
import { PlayerList, GKList, DEFList, MIDList, FWDList } from './utils/PlayerList';
import ListPlayer from './components/ListPlayer/ListPlayer';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';

function App() {
  const [selectedPosition, setSelectedPosition] = useState('Todos');

  const POSITIONS = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Delantero'];
  return (
    <>
      <div className="app">
        <div className="app__player-list">
          <h3>Todos los jugadores:</h3>
          {PlayerList.map((player, dorsal) => (
            <ListPlayer key={dorsal} text={player.name} dorsal={player.dorsal} />
          ))}
        </div>
        <div className="app__player-profile">
          <nav className="player-profile__navbar">
            {POSITIONS.map((pos) => (
              <div
                key={pos}
                onClick={() => setSelectedPosition(pos)}
                className={selectedPosition === pos ? 'active' : ''}
              >
                {pos}
              </div>
            ))}
          </nav>

          <div className="app__player-profile__container">
            {selectedPosition === 'Todos' &&
              PlayerList.map((player) => <PlayerProfile key={player.dorsal} player={player} />)}

            {selectedPosition === 'Portero' &&
              GKList.map((player) => <PlayerProfile key={player.dorsal} player={player} />)}

            {selectedPosition === 'Defensa' &&
              DEFList.map((player) => <PlayerProfile key={player.dorsal} player={player} />)}

            {selectedPosition === 'Centrocampista' &&
              MIDList.map((player) => <PlayerProfile key={player.dorsal} player={player} />)}

            {selectedPosition === 'Delantero' &&
              FWDList.map((player) => <PlayerProfile key={player.dorsal} player={player} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
