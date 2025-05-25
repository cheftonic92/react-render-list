import { useState, useEffect } from 'react';
import './App.css';
import { getPlayers, deletePlayer } from './services/api';
import ListPlayer from './components/ListPlayer/ListPlayer';
import PlayerProfile from './components/PlayerProfile/PlayerProfile';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('Todos');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [formAction, setFormAction] = useState('create'); // 'create' o 'update'
  const [editData, setEditData] = useState(null);

  const POSITIONS = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Delantero'];

  const loadPlayers = () => {
    getPlayers()
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error('Error al cargar jugadores:', err));
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleSelectedPlayer = (player) => () => {
    setSelectedPlayer(player);
  };

  const handleDeletePlayer = (dorsal) => {
    deletePlayer(dorsal)
      .then(() => {
        setPlayers(players.filter((p) => p.dorsal !== dorsal));
        if (selectedPlayer?.dorsal === dorsal) {
          setSelectedPlayer(null);
        }
      })
      .catch((err) => console.error('Error al eliminar jugador:', err));
  };

  const openCreateSidebar = () => {
    setFormAction('create');
    setEditData(null);
    setShowSidebar(true);
  };

  const openEditSidebar = (player) => {
    setFormAction('update');
    setEditData(player);
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="app">
        <div className="app__player-list">
          <button
            onClick={openCreateSidebar}
            className="add-player-btn btn btn-outline-success me-2 mb-2"
          >
            <FaPlus /> Añadir Jugador
          </button>
          {players.map((player) => (
            <ListPlayer
              key={player.dorsal}
              text={player.name}
              dorsal={player.dorsal}
              handleClick={handleSelectedPlayer(player)}
              onDelete={() => handleDeletePlayer(player.dorsal)}
              onEdit={() => openEditSidebar(player)}
            />
          ))}
        </div>
        <div className="app__player-profile">
          <nav className="player-profile__navbar">
            {POSITIONS.map((pos) => (
              <div
                key={pos}
                onClick={() => {
                  setSelectedPosition(pos);
                  setSelectedPlayer(null);
                }}
                className={selectedPosition === pos ? 'active' : ''}
              >
                {pos}
              </div>
            ))}
          </nav>

          <div className="app__player-profile__container">
            {selectedPlayer ? (
              <PlayerProfile player={selectedPlayer} key={selectedPlayer.dorsal} />
            ) : (
              players
                .filter((p) =>
                  selectedPosition === 'Todos' ? true : p.posicion === selectedPosition
                )
                .map((player) => <PlayerProfile key={player.dorsal} player={player} />)
            )}
          </div>
        </div>
      </div>
      <Sidebar
        show={showSidebar}
        handleClose={closeSidebar}
        action={formAction}
        data={editData}
        handleSave={loadPlayers}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
