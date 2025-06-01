import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/equipo/:teamId" element={<TeamPage />} />
            <Route path="/player/:playerId" element={<PlayerPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
