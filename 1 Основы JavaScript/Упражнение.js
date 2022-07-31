"use strict";

//? 1
// let userName = 'John';
// let number = 25;
// number = 24;

// console.log(number);



//? 2
// const storeDescription = {
//     budget: 10000,
//     employees: ['Sardor', 'Asadbek', 'Otabek'],
//     products: {
//         tShirt: 20,
//         shirt: 25
//     },
//     open: true
// };



//? 3
// function firstTask() {
//     for(let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }

// firstTask();



// function secondTask() {
//     for (let i = 20; i > 9; i--) {
//         console.log(i);
//         if (i == 13) {
//             break;
//         }
//     }
// }

// secondTask();



// function thirdTask() {
//     for (let i = 2; i < 11; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();



// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// function fourthTask() {
//     for (let i = 2; i <= 16; i++) {
//         if (i % 2 == 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }
// fourthTask();



// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);

//     return arrayOfNumbers;
// }

// fifthTask();





//! ===================================
let arr = [];

for (let i = 10; i <= 40; i++) {
    if (i % 2 == 0) {
        arr[i - 10] = i;
    }
}
console.log(arr);



//? 4

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for( let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);



    return result;
}

firstTask();

const qwe = ["Sardor", 'Asadbek'];
const asd = [];

asd[0] = qwe[1];

qwe[0] = 'Otabek';

console.log(asd);

let zxc = 'Sardor';
let sara = 'Asadbek';
console.log(zxc + sara);
console.log(`${zxc} ${sara}`);


function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);

    return data;
}

secondTask();




function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];



    return result;
}

thirdTask();