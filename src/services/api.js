import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getPlayers = () => axios.get(`${API_URL}/players`);
export const createPlayer = (player) => axios.post(`${API_URL}/players`, player);
export const updatePlayer = (dorsal, updates) => axios.put(`${API_URL}/players/${dorsal}`, updates);
export const deletePlayer = (dorsal) => axios.delete(`${API_URL}/players/${dorsal}`);
