// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchini = [
 {
  type: `zucchina nera`,
  weight: 80,
  length: 25
 },
 {
  type: `zucchina nera`,
  weight: 80,
  length: 29
 },
 {
  type: `zucchina napoletana`,
  weight: 55,
  length: 15,
 },
 {
  type: `zucchina tonda`,
  weight: 38,
  length: 41
 },
 {
  type: `zucchina nera`,
  weight: 55,
  length: 13
 },
 {
  type: `zucchina trombetta`,
  weight: 101,
  length: 30
 },
 {
  type: `zucchina nera`,
  weight: 80,
  length: 27
 },
 {
  type: `zucchina tonda`,
  weight: 79,
  length: 25
 },
 {
  type: `zucchino romanesco`,
  weight: 77,
  length: 40
 },
 {
  type: `zucchina nera`,
  weight: 66,
  length: 13
 },
 {
  type: `zucchina napoletana`,
  weight: 32,
  length: 56
 }
]

// Create two empty array
const mediumSize = 15;
const zucchiniSmall = [];
const zucchiniBig = [];

// Fill the two empty array
for (let i = 0; i < zucchini.length; i++) {
    const element = zucchini[i];
    if (mediumSize <= element.length) {
        zucchiniSmall.push(element)
    }
    else {
        zucchiniBig.push(element)
    }
    
}

// Add the lengths of the zucchini and print the result in the console
// Small
let sumSmall = 0;
for (let x = 0; x < zucchiniSmall.length; x++) {
    const element = zucchiniSmall[x];
    sumSmall += element.length
}

// Big
let sumBig = 0;
for (let y = 0; y < zucchiniBig.length; y++) {
    const element = zucchiniBig[y];
    sumBig += element.length
}


console.log(`Sum Small Zucchini: `, sumSmall);
console.log(`Sum Big Zucchini: `, sumBig);