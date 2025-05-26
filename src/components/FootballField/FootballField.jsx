// src/components/FootballField/FootballField.jsx
import './FootballField.css';
import FieldPosition from '../FieldPosition/FieldPosition'; // Asegúrate de que este componente exista

const FootballField = ({ lineup, onDropPlayer, onClearPosition }) => {
  return (
    <div className="football-field">
      <div className="lineup-row">
        <FieldPosition
          label="DCI"
          player={lineup.DCI}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="DCD"
          player={lineup.DCD}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="MI"
          player={lineup.MI}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="MCI"
          player={lineup.MCI}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="MCD"
          player={lineup.MCD}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="MD"
          player={lineup.MD}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="LI"
          player={lineup.LI}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="DFCI"
          player={lineup.DFCI}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="DFCD"
          player={lineup.DFCD}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
        <FieldPosition
          label="LD"
          player={lineup.LD}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="PT"
          player={lineup.PT}
          onDropPlayer={onDropPlayer}
          onClearPosition={onClearPosition}
        />
      </div>
    </div>
  );
};

export default FootballField;
