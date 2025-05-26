/* eslint-disable no-undef */

const express = require('express');
const cors = require('cors');
const { PlayerList } = require('./playerData');
const app = express();

app.use(cors());
app.use(express.json());

let players = [... PlayerList];

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
