import { useDrag } from 'react-dnd';

const PlayerCard = ({ player, handleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'player',
    item: { ...player },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      onClick={() => handleClick(player)}
      className="team-players__container col-md-6 col-lg-3 d-flex flex-column align-items-center mb-3"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <img src={player.photo} alt={player.name} style={{ width: '80%' }} />
      <div className="team-players__text-container">
        <span className="dorsal-box p-3">#{player.number}</span>
        <span>{player.name}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
