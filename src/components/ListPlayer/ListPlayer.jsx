import './ListPlayer.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListPlayer = ({ text, dorsal, handleClick, onEdit, onDelete }) => {
  return (
    <div className="list-player__container" onClick={handleClick}>
      <div className="d-flex align-items-center">
        <div className="list-player__dorsal">{dorsal}</div>
        <div className="list-player__name">{text}</div>
      </div>
      <div className="list-player__actions">
        <button
          className="btn btn-outline-success me-2"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default ListPlayer;
