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
              <span className="player-profile__info__header__dorsal">#{player.number}</span>
              <Flag
                code={flags[player.nationality]}
                style={{ width: '5rem', height: '5rem' }}
                fallback={<span>{player.nationality}</span>}
              />
            </p>
            <div className="player-profile__info__datos">
              <p className="player-profile__info__datos__cell">{player.position}</p>
              <p className="player-profile__info__datos__cell">
                {player.age} <span>años</span>
              </p>
              <p className="player-profile__info__datos__cell">{player.height}</p>
              <p className="player-profile__info__datos__cell">{player.weight}</p>
            </div>
          </div>
        </div>
        <div className="player-profile__image">
          <img src={player.photo} alt={player.name} />
        </div>
      </div>
    </div>
  );
};
export default PlayerProfile;
