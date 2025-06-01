import axios from 'axios';



export const getPlayers = () => axios.get(`${BASE_URL}/players`);
export const createPlayer = (player) => axios.post(`${BASE_URL}/players`, player);
export const updatePlayer = (dorsal, updates) => axios.put(`${BASE_URL}/players/${dorsal}`, updates);
export const deletePlayer = (dorsal) => axios.delete(`${BASE_URL}/players/${dorsal}`);

const BASE_URL = 'http://localhost:3000/api';

const HEADERS = {
  'x-apisports-key': '7e0c0ed0fc6c5d140b7c4d69023107c0'
};

export const getTeams = () => {
  return axios.get(`${BASE_URL}/teams?league=140&season=2023`);
};

export const getPlayersByTeam = (teamId) => {
  return axios.get(`${BASE_URL}/players/${teamId}`);
};


export const getPlayerProfile = (playerId) => {
  return axios.get(`http://localhost:3000/api/player/${playerId}`, { headers: HEADERS });
};
