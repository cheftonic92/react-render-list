import './FootballField.css';
import FieldPosition from '../FieldPosition/FieldPosition';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const POSITIONS = ['DCI', 'DCD', 'MI', 'MCI', 'MCD', 'MD', 'LI', 'DFCI', 'DFCD', 'LD', 'PT'];

const FootballField = () => {
  const { lineup, dropPlayerToPosition, clearPosition } = useContext(AppContext);

  return (
    <div className="football-field">
      <div className="lineup-row">
        <FieldPosition
          label="DCI"
          player={lineup.DCI}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="DCD"
          player={lineup.DCD}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="MI"
          player={lineup.MI}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="MCI"
          player={lineup.MCI}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="MCD"
          player={lineup.MCD}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="MD"
          player={lineup.MD}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="LI"
          player={lineup.LI}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="DFCI"
          player={lineup.DFCI}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="DFCD"
          player={lineup.DFCD}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
        <FieldPosition
          label="LD"
          player={lineup.LD}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
      </div>
      <div className="lineup-row">
        <FieldPosition
          label="PT"
          player={lineup.PT}
          onDropPlayer={dropPlayerToPosition}
          onClearPosition={clearPosition}
        />
      </div>
    </div>
  );
};

export default FootballField;
