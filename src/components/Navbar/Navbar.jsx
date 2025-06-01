import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { teams } = useContext(AppContext);

  return (
    <nav className="navbar-teams">
      {teams.map((team) => (
        <Link key={team.team.id} to={`/equipo/${team.team.id}`} className="navbar-team-link">
          <img src={team.team.logo} alt={team.team.name} className="team-logo" />
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
