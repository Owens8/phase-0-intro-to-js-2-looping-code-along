
const names = ["Charlie", "Samip", "Ali"];
const event = ["birthday"];
let newNames = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}

function countDown() {
    let number = 10;
    while (number >= 0) {
        console.log(number--);
    }
}