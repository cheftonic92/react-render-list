import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import PlayerProfile from '../../components/PlayerProfile/PlayerProfile';
import { getPlayerProfile } from '../../services/api';
import './PlayerPage.css';

const PlayerPage = () => {
  const { selectedPlayer } = useContext(AppContext);
  const [fullPlayer, setFullPlayer] = useState(null);

  useEffect(() => {
    if (selectedPlayer) {
      getPlayerProfile(selectedPlayer.id)
        .then((res) => {
          const playerData = res.data.response[0]?.player;
          if (playerData) setFullPlayer(playerData);
        })
        .catch((err) => console.error('Error fetching player profile:', err));
    }
  }, [selectedPlayer]);

  return (
    <div>
      {fullPlayer ? <PlayerProfile player={fullPlayer} /> : <p>Cargando perfil del jugador...</p>}
    </div>
  );
};

export default PlayerPage;
