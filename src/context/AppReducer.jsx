// src/context/reducer.js

import {
  SET_PLAYERS,
  SET_SELECTED_PLAYER,
  DELETE_PLAYER,
  SET_LINEUP,
  CLEAR_POSITION,
  RESET_LINEUP,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SET_TEAMS,
  SET_CURRENT_TEAM,
} from './types';
import { initialLineup } from './AppStore';

export const appReducer = (store, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return { ...store, teams: action.payload };

    case SET_CURRENT_TEAM:
      return { ...store, currentTeam: action.payload };

    case SET_PLAYERS:
      return { ...store, players: action.payload };

    case SET_SELECTED_PLAYER:
      return { ...store, selectedPlayer: action.payload };

    case DELETE_PLAYER:
      return {
        ...store,
        players: store.players.filter((p) => p.dorsal !== action.payload),
        selectedPlayer:
          store.selectedPlayer?.dorsal === action.payload ? null : store.selectedPlayer,
      };

    case SET_LINEUP:
      return {
        ...store,
        lineup: {
          ...store.lineup,
          [action.payload.position]: action.payload.player,
        },
      };

    case CLEAR_POSITION:
      return {
        ...store,
        lineup: {
          ...store.lineup,
          [action.payload]: null,
        },
      };

    case RESET_LINEUP:
      return { ...store, lineup: initialLineup };

    case OPEN_SIDEBAR:
      return {
        ...store,
        showSidebar: true,
        formAction: action.payload.action,
        editData: action.payload.data || null,
      };

    case CLOSE_SIDEBAR:
      return { ...store, showSidebar: false, editData: null };

    default:
      return store;
  }
};
