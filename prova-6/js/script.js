// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letters = [`a`, `b`, `c`, `d`];
const numbers = [1, 2, 3, 4];

//Create empty array
const lettNumb = [];

//Fill empty array
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const number = numbers[i];

    lettNumb.push(letter);//Push letter first
    lettNumb.push(number);//than number
}


//Print result in console
console.log(lettNumb)