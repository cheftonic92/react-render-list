/* eslint-disable no-undef */

const express = require('express');
const cors = require('cors');
const { PlayerList } = require('./playerData');
const app = express();

app.use(cors());
app.use(express.json());

let players = [... PlayerList];


const axios = require('axios');

const API_BASE = 'https://v3.football.api-sports.io';
const HEADERS = {
  'x-apisports-key': '7e0c0ed0fc6c5d140b7c4d69023107c0',
};

app.get('/api/teams', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/teams?league=140&season=2023`, { headers: HEADERS });
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener equipos:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener los equipos' });
  }
});

app.get('/api/players/:teamId', async (req, res) => {
  const { teamId } = req.params;
  try {
    const response = await axios.get(`${API_BASE}/players/squads?team=${teamId}`, {
      headers: HEADERS,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener plantilla del equipo:', error.message);
    res.status(500).json({ error: 'No se pudo obtener la plantilla' });
  }
});

app.get('/api/player/:playerId', async (req, res) => {
  const { playerId } = req.params;
  try {
    const response = await axios.get(`${API_BASE}/players/profiles?player=${playerId}`, {
      headers: HEADERS,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener perfil del jugador:', error.message);
    res.status(500).json({ error: 'No se pudo obtener el perfil del jugador' });
  }
});

app.get('/players', (req, res) => {
  res.json(players);
});

app.post('/players', (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

app.put('/players/:dorsal', (req, res) => {
  const { dorsal } = req.params;
  const player = players.find(p => p.dorsal == dorsal);
  if (player) {
    Object.assign(player, req.body);
    res.json(player);
  } else {
    res.status(404).json({ message: 'Jugador no encontrado' });
  }
});

app.delete('/players/:dorsal', (req, res) => {
  const { dorsal } = req.params;
  const index = players.findIndex(p => p.dorsal == dorsal);
  if (index !== -1) {
    const deleted = players.splice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).json({ message: 'Jugador no encontrado' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
