import { createContext, useReducer } from 'react';
import { appReducer } from './AppReducer';
import { initialStore } from './AppStore';
import * as types from './types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialStore);

  const setTeams = (teams) => dispatch({ type: types.SET_TEAMS, payload: teams });
  const setCurrentTeam = (team) => dispatch({ type: types.SET_CURRENT_TEAM, payload: team });

  const setPlayers = (players) => dispatch({ type: types.SET_PLAYERS, payload: players });
  const selectPlayer = (player) => dispatch({ type: types.SET_SELECTED_PLAYER, payload: player });
  const deletePlayerByDorsal = (dorsal) => dispatch({ type: types.DELETE_PLAYER, payload: dorsal });

  const dropPlayerToPosition = (position, player) =>
    dispatch({ type: types.SET_LINEUP, payload: { position, player } });

  const clearPosition = (position) => dispatch({ type: types.CLEAR_POSITION, payload: position });
  const resetLineup = () => dispatch({ type: types.RESET_LINEUP });

  const openSidebar = (action = 'create', data = null) =>
    dispatch({ type: types.OPEN_SIDEBAR, payload: { action, data } });

  const closeSidebar = () => dispatch({ type: types.CLOSE_SIDEBAR });

  return (
    <AppContext.Provider
      value={{
        ...store,
        setTeams,
        setCurrentTeam,
        setPlayers,
        selectPlayer,
        deletePlayerByDorsal,
        dropPlayerToPosition,
        clearPosition,
        resetLineup,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
