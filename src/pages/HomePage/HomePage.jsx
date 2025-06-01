import { useState, useEffect } from 'react';
import { deletePlayer, getPlayersByTeam } from '../../services/api';
import ListPlayer from '../../components/ListPlayer/ListPlayer';
import PlayerProfile from '../../components/PlayerProfile/PlayerProfile';
import Sidebar from '../../components/Sidebar/Sidebar';
import FootballField from '../../components/FootballField/FootballField';
import Loader from '../../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import { RiResetLeftLine } from 'react-icons/ri';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function HomePage() {
  const POSITIONS = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Delantero'];
  const initialLineup = {
    PT: null,
    LD: null,
    DFCD: null,
    DFCI: null,
    LI: null,
    MCI: null,
    MCD: null,
    MD: null,
    MI: null,
    DCI: null,
    DCD: null,
  };

  const [players, setPlayers] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('Todos');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [formAction, setFormAction] = useState('create');
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lineup, setLineup] = useState(initialLineup);

  const loadPlayers = () => {
    setLoading(true);
    getPlayersByTeam()
      .then((res) => {
        setPlayers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar jugadores:', err);
        setLoading(false);
      });
  };
  useEffect(() => {
    loadPlayers();
  }, []);

  if (loading) return <Loader />;

  const resetLineup = () => {
    setLineup(initialLineup);
  };

  const handleDropPlayer = (position, player) => {
    setLineup((prev) => ({
      ...prev,
      [position]: player,
    }));
  };

  const handleClearPosition = (position) => {
    setLineup((prev) => ({
      ...prev,
      [position]: null,
    }));
  };

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
      <DndProvider backend={HTML5Backend}>
        <div className="app">
          <div className="app__player-list">
            <div
              onClick={openCreateSidebar}
              className="add-player-btn btn btn-outline-success mb-2 d-flex align-items-center justify-content-center gap-2"
            >
              <FaPlus /> Añadir Jugador
            </div>
            {players.map((player) => (
              <ListPlayer
                key={player.dorsal}
                text={player.name}
                dorsal={player.dorsal}
                player={player}
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
          <div>
            <div
              onClick={resetLineup}
              className="btn btn-outline-danger mb-2 d-flex align-items-center justify-content-center gap-2"
            >
              <RiResetLeftLine /> Resetear alineación
            </div>
            <FootballField
              lineup={lineup}
              onDropPlayer={handleDropPlayer}
              onClearPosition={handleClearPosition}
            />
          </div>
          <Sidebar
            show={showSidebar}
            handleClose={closeSidebar}
            action={formAction}
            data={editData}
            handleSave={loadPlayers}
          />
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </DndProvider>
    </>
  );
}

export default HomePage;
