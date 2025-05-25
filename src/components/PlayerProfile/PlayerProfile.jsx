import './PlayerProfile.css';
import { flags } from '../../utils/flags';
import Flag from 'react-world-flags';
import { useDrag } from 'react-dnd';

const PlayerProfile = ({ player }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'player',
    item: { ...player },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="player-profile__container" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="player-profile__info">
        <div className="player-profile__info__header">
          <div>
            <h2>{player.name}</h2>
            <p className="player-profile__info__header__cell">
              <span className="player-profile__info__header__dorsal">#{player.dorsal}</span>
              <Flag
                code={flags[player.nacionalidad]}
                style={{ width: '5rem', height: '5rem' }}
                fallback={<span>{player.nacionalidad}</span>}
              />
            </p>
            <p className="player-profile__info__header__rol">{player.rol}</p>
            <div className="player-profile__info__datos">
              <p className="player-profile__info__datos__cell">
                {player.edad} <span>años</span>
              </p>
              <p className="player-profile__info__datos__cell">
                {player.altura} <span>cm</span>
              </p>
              <p className="player-profile__info__datos__cell">
                {player.peso} <span>kg</span>
              </p>
            </div>
          </div>
          <div className="player-profile__details">
            <p className="player-profile_details__cell">
              Llegada: <span>{player.llegada}</span>
            </p>
            <p className="player-profile_details__cell">
              Partidos jugados: <span>{player.partidos_jugados}</span>
            </p>
            <p className="player-profile_details__cell">
              Goles: <span>{player.goles}</span>
            </p>
          </div>
        </div>
        <div className="player-profile__image">
          <img src={player.image} alt={player.name} />
        </div>
      </div>
    </div>
  );
};
export default PlayerProfile;
