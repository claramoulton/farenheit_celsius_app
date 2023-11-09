function convertToCelsius(farenheit){
    return ((farenheit -32)* (5/9));
}

function createMessage(farenheit, celsius){
    let message = '';
    const numFarenheit = farenheit * 1;

    if(numFarenheit === 212) {
        message = 'Thats the boiling point of water!';
    } else if(numFarenheit === 32) {
        message = 'Thats freezing!';
    }

    return `${farenheit} farenheit is ${celsius} celsius. ${message}`;
}

function rand(limit){
    return Math.round(Math.random()*limit);
}

let inputFarenheit = prompt('enter a number, we will convert that number from Farenheit to Celsius');
let convertedCelsius = convertToCelsius(inputFarenheit);
let output = createMessage(inputFarenheit, convertedCelsius);
console.log(output);

