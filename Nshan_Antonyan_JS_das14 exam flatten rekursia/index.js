// let arrNumberString = [];
//
// function example() {
//     fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/flatten`)
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             let serv1 = data.data.example1.input;
//             sumSalaries(serv1);
//             console.log(arrNumberString);
//         });
// }
// example();
//
// function sumSalaries(data) {
//     return data.reduce((prev, current) => {
//         if (Array.isArray(current)) {
//             return sumSalaries(current);
//         }
//         arrNumberString.push(current);
//     }, 0);
// }

// -------------------------------------------------------------------------------------------------


// function example() {
//     fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/expression?fbclid=IwAR08DeewkFyLOkdAOrghePq6UTcYPIZ9wKRy6IhnUPzEehbLGs6JD88Ly-c`)
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             let serv1 = data.data.example1.input;
//             console.log(tester(serv1));
//         });
// }
//
// example();
//
// function tester(dat) {
//     let arry = dat.split("");
//     let arrPrimer = ['(', ')', '{', '}', '[', ']', '<', '>'];
//
//     let obj = {};
//
//     for (let i = 0; i < arrPrimer.length; i++) {
//         obj[arrPrimer[i]] = 0;
//     }
//
//     for (let i = 0; i < arry.length; i++) {
//         for (let j = 0; j < arrPrimer.length; j++) {
//             if (arrPrimer[j] === arry[i]) {
//                 if (obj[arry[i]]) {
//                     obj[arry[i]] = obj[arry[i]] + 1;
//                 } else {
//                     obj[arry[i]] = 1;
//                 }
//             }
//         }
//     }
//
//     let operatorArray = [];
//
//     for (let kay in obj) {
//         operatorArray.push(obj[kay]);
//     }
//
//     let mas1 = [];
//     let mas2 = [];
//
//     for (let i = 0; i < operatorArray.length; i++) {
//         if (i % 2 === 0) {
//             mas1.push(operatorArray[i]);
//         } else {
//             mas2.push(operatorArray[i]);
//         }
//     }
//
//     let TruthOrLie = true;
//
//     for (let i = 0; i < mas1.length; i++) {
//         if (mas1[i] !== mas2[i]) {
//             TruthOrLie = false;
//         }
//     }
//
//     return TruthOrLie;
// }

//------------------------------------------------------------------------------------------------
//tnayin 4

//  function example() {
//     fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/random_calculation?fbclid=IwAR3yklxprmQomyEti5tv1Q98nrCvO0LL6hmWzdWYJhCKmHVuaOYxYtu8CxY`)
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             let serv1 = data.data.example1.input;
//             let testArr = [1,-3,5,-6,10];
//             calculator(serv1);
//         });
// }
// example();
//
// function calculator(arr) {
//     console.log(arr);
//     let calcArr = [
//         {"plus":function (arg1, arg2){
//                 return arg1 + arg2;
//             },title:"+"},
//         {"plus":function (arg1, arg2){
//                 return arg1 - arg2;
//             },title:"-"},
//         {"plus":function (arg1, arg2){
//                 return arg1 / arg2;
//             },title:"/"},
//         {"plus":function (arg1, arg2){
//                 return arg1 * arg2;
//             },title:"*"}
//     ];
//     let truFals = true;
//     let sum = arr[0];
//
//     let elementArr = 0;
//     // console.log(calcArr[0].plus(1,2));
//
//     for (let i = 1; i < arr.length; i++) {
//         if (truFals === true) {
//             // sum += arr[i];
//             sum = calcArr[elementArr].plus(sum,arr[i]);
//
//             alert(calcArr[elementArr].title);
//             alert(sum );
//             if (elementArr === 3){
//                 elementArr = 0;
//             }else {
//                 elementArr++;
//             }
//             if (arr[i] < 0) {
//                 truFals = false;
//             }
//         } else {
//             // sum += arr[i];
//             sum = calcArr[elementArr].plus(sum,arr[i]);
//
//             alert( calcArr[elementArr].title );
//             alert( sum );
//             if (elementArr < 1){
//                 elementArr = 3;
//             }else {
//                 elementArr--;
//             }
//             if (arr[i] < 0) {
//                 truFals = true;
//             }
//         }
//     }
// }

// -------------------------------------------------------------------------
// tnayin 3
//  function example() {
//     fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/chain?fbclid=IwAR1OitylROFPotg2YKkDVHWsXAoFm_2GLY_qK-gwpWI4f3O1qSPRtrpYYbo`)
//         .then((data) => {
//             return data.json();
//         })
//         .then((data) => {
//             let serv1 = data.data.example1.input_code;
//             f(serv1);
//         });
// }
// example();
//
// function f(fank){
//     let fankshn = fank;
//     console.log(fankshn);
// }
//
// function add(num) {
//     return num + 1;
// }
//
// function mult(num) {
//     return num * 30;
// }
//
// function chain(sum, arry){
//     let additionAmount = 0;
//     let multiplicationSum = 0;
//     additionAmount = arry[0](sum);
//     multiplicationSum = arry[1](additionAmount);
//
//     console.log(multiplicationSum);
// }
// chain(2, [add, mult]);
//
// function drop(num) { return num / 2;}  function doSomethingAsync(num) { return Promise.resolve(num * 3); } chain(10,[drop, doSomethingAsync]);
