`use strict`;

// Our task is this; "Given an array of temperatures
// of one day, calculate the temperature amplitude. Keep
// in mind that the sensor may throw an error"

const temperatures = [3,-2,-6,-1, `error`, 9 , 13, 17, 15,14,9,5,`error`];

// amplitude = max - min
// the min method might not work with strings, so let's do a loop to remove errors
// then use max and min methods to calculate the amplitude

// version 1.0
// function calcTempAmp(temperatures){
//     for (let temperature_index in temperatures) {
//         if(temperatures[temperature_index] != `error`) continue;
//         temperatures.splice(temperature_index,1);
//     }

//     let amplitude = Math.max(...temperatures) - Math.min(...temperatures);
//     console.log(amplitude);
// }

// calcTempAmp(temperatures)

// version 2.0
function calcTempAmp (arr){
    let max = -Infinity , min = Infinity; // potrei pure assegnare ad entrambi il primo valore dell'array, però swag
    for(let element of arr){
        if(element == `error`) continue;
        if(max < element) max = element;
        if (min > element) min = element; 
    }
    return max-min;
}

console.log(calcTempAmp(temperatures));