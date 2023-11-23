'use strict';

const squadrePallavolo = [
  { nome: 'SirPerugia', punti: 0, puntiSubiti: 0 },
  { nome: 'ItasTrentino', punti: 0, puntiSubiti: 0 },
  { nome: 'BlueenergyPiacenza', punti: 0, puntiSubiti: 0 },
  { nome: 'VeroMonza', punti: 0, puntiSubiti: 0 },
  { nome: 'Juventus', punti: 0, puntiSubiti: 0 },
  { nome: 'LubeCivitanova', punti: 0, puntiSubiti: 0 },
  { nome: 'Modena', punti: 0, puntiSubiti: 0 },
  { nome: 'Padova', punti: 0, puntiSubiti: 0 },
  { nome: 'CisternaVolley', punti: 0, puntiSubiti: 0 },
  { nome: 'RanaVerona', punti: 0, puntiSubiti: 0 },
  { nome: 'AllianzMilano', punti: 0, puntiSubiti: 0 },
  { nome: 'FarmitaliaCatania', punti: 0, puntiSubiti: 0 },
  { nome: 'PrismaTaranto', punti: 0, puntiSubiti: 0 },
];

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadrePallavolo.forEach((squadra) => {
  squadra.punti = generaNumeroCasuale(0, 66);
  squadra.puntiSubiti = generaNumeroCasuale(1400, 2200);
});

const classifica = squadrePallavolo.sort((a, b) => b.punti - a.punti);
const subiti = squadrePallavolo.map(({ nome, puntiSubiti }) => ({
  nome,
  puntiSubiti,
}));
console.log('Squadre con nome e puntisubiti:', subiti);
console.log('Classifica:');
classifica.forEach((squadra, i) => {
  console.log(`${i + 1}. ${squadra.nome} - Punti: ${squadra.punti}`);
});
