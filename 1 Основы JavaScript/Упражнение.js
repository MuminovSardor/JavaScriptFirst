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