import './ListPlayer.css';

const ListPlayer = ({ text, dorsal }) => {
  return (
    <div className="list-player__container">
      <div className="list-player__dorsal">{dorsal}</div>
      <div className="list-player__name">{text}</div>
    </div>
  );
};
export default ListPlayer;
