import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import FootballField from '../../components/FootballField/FootballField';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { getTeams } from '../../services/api';
import './Layout.css';

const Layout = () => {
  const { teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    getTeams()
      .then((res) => setTeams(res.data.response))
      .catch((err) => console.error('Error al cargar equipos:', err));
  }, []);

  return (
    <>
      <div className="layout-container">
        <Navbar />
        <div className="d-flex w-100">
          <div className="main-container w-60">
            <Outlet />
          </div>
          <div className="football-field-container">
            <FootballField />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
