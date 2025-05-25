import { useDrop } from 'react-dnd';
import './FieldPosition.css'; // Asegúrate de que este archivo CSS exista

const FieldPosition = ({ label, player, onDropPlayer, onClearPosition }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'player',
    drop: (draggedPlayer) => {
      onDropPlayer(label, draggedPlayer);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      className="field-position"
      ref={drop}
      onClick={() => onClearPosition(label)}
      style={{ backgroundColor: isOver ? '#81c784' : undefined }}
    >
      {player ? (
        <div className="player-slot">
          <img src={player.image} alt={player.name} />
          <span>{player.name}</span>
        </div>
      ) : (
        <div className="player-slot empty">{label}</div>
      )}
    </div>
  );
};

export default FieldPosition;
