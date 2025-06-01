import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlayersByTeam } from '../../services/api';
import { AppContext } from '../../context/AppContext';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './TeamPage.css';

const TeamPage = () => {
  const { teamId } = useParams();
  const [players, setPlayers] = useState([]);
  const POSITIONS = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Attacker'];
  const [filtered, setFiltered] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState('All');
  const { selectPlayer } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPlayersByTeam(teamId)
      .then((res) => {
        const playerList = res.data.response[0]?.players || [];
        setPlayers(playerList);
      })
      .catch((err) => console.error('Error al cargar jugadores del equipo:', err));
  }, [teamId]);

  useEffect(() => {
    if (selectedPosition === 'All') {
      setFiltered(players);
    } else {
      setFiltered(players.filter((p) => p.position === selectedPosition));
    }
  }, [selectedPosition, players]);

  const handlePlayerClick = (player) => {
    selectPlayer(player);
    navigate(`/player/${player.id}`);
  };

  return (
    <div>
      <nav className="player-profile__navbar">
        {POSITIONS.map((pos) => (
          <div
            key={pos}
            onClick={() => {
              setSelectedPosition(pos);
            }}
            className={selectedPosition === pos ? 'active' : ''}
          >
            {pos === 'All' ? 'Todos' : pos}
          </div>
        ))}
      </nav>
      <div className="team-players d-flex flex-wrap justify-content-center align-items-center gap-5 p-3">
        {filtered.map((player) => (
          <PlayerCard key={player.id} player={player} handleClick={handlePlayerClick} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
