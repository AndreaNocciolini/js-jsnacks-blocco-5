// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

let calc = 0;

for (let i = 0; i < zucchini.length; i++) {
    const element = zucchini[i];
    calc += element.weight;
}

console.log(`Result: `, calc)