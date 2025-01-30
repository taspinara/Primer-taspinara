// Array of animals in the zoo
const animals = ['Lion', 'Tiger', 'Bear', 'Giraffe', 'Zebra', 'Monkey'];

// Use a for loop to count the total number of animals.
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log(animals.length);

// Use a while loop to count animals whose names have five or more letters.
let i = 0;
while (i < animals.length) {
    if (animals[i].length >= 5) {
        console.log(animals[i]);
    }
    i++;
}

// Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'
let j = 0;
let capitalAnimal;
do {
    capitalAnimal = animals[j].slice(0, 1);
    capitalAnimal !== 'M' ? console.log(animals[j]) : console.log('Animal whose name starts with M is found: ', animals[j]);
    j++;
} while (j < animals.length);
console.log('Number of animals whose name do not start with "m": ', j - 1);

let index = 0;
let firstLetter;

// Use a do...while loop to count animals until you encounter an animal whose name starts with 'M'
do {
    firstLetter = animals[index].charAt(0).toUpperCase();

    if (firstLetter === 'M') {
        console.log('Animal whose name starts with "M" is found:', animals[index]);
        break;
    }

    console.log(animals[index]);
    index++;

} while (index < animals.length);

console.log('Number of animals whose names do not start with "M":', index);
