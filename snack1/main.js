'use scrict';

// Creo array oggetti descrivendo le caratteristiche delle biciclette con valori di nome e peso. Stampo a schermo la bici con peso minore.

const arrayBiciCorsa = [
  //biciclettacorsa 1
  {
    nome: 'Specialized',
    peso: 16,
  },
  //biciclettacorsa 2
  {
    nome: 'Pinarello',
    peso: 12,
  },
  //biciclettacorsa 3
  {
    nome: 'Colnago',
    peso: 9,
  },
  //biciclettacorsa 4
  {
    nome: 'Trek',
    peso: 11,
  },
  //biciclettacorsa 5
  {
    nome: 'Cannondale',
    peso: 14,
  },
  //biciclettacorsa 6
  {
    nome: 'Decathlon',
    peso: 8,
  },
];

let pesoSmall = 100;
let nomeSmall = '';
// per ciclare l'array di oggetti uso ciclo forEach
arrayBiciCorsa.forEach((elemento, index) => {
  const { peso, nome } = arrayBiciCorsa[(elemento, index)];
  console.log(peso, nome);
  if (peso < pesoSmall) {
    pesoSmall = peso;
    nomeSmall = nome;
  }
});
console.log(`
La bici più leggera ha il seguente nome ${nomeSmall} e pesa: ${pesoSmall} kg
`);
//stampo a schermo per visualizzare risultato finale
const biciclette = document.querySelector('.biciclette');
biciclette.innerHTML = `
La bici più leggera ha il seguente nome ${nomeSmall} e pesa: ${pesoSmall} kg
`;
