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


function example() {
    fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/expression?fbclid=IwAR08DeewkFyLOkdAOrghePq6UTcYPIZ9wKRy6IhnUPzEehbLGs6JD88Ly-c`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let serv1 = data.data.example1.input;
            console.log(tester(serv1));
        });
}

example();

function tester(dat) {
    let arry = dat.split("");
    let arrPrimer = ['(', ')', '{', '}', '[', ']', '<', '>'];

    let obj = {};

    for (let i = 0; i < arrPrimer.length; i++) {
        obj[arrPrimer[i]] = 0;
    }

    for (let i = 0; i < arry.length; i++) {
        for (let j = 0; j < arrPrimer.length; j++) {
            if (arrPrimer[j] === arry[i]) {
                if (obj[arry[i]]) {
                    obj[arry[i]] = obj[arry[i]] + 1;
                } else {
                    obj[arry[i]] = 1;
                }
            }
        }
    }

    let operatorArray = [];

    for (let kay in obj) {
        operatorArray.push(obj[kay]);
    }

    let mas1 = [];
    let mas2 = [];

    for (let i = 0; i < operatorArray.length; i++) {
        if (i % 2 === 0) {
            mas1.push(operatorArray[i]);
        } else {
            mas2.push(operatorArray[i]);
        }
    }

    let TruthOrLie = true;

    for (let i = 0; i < mas1.length; i++) {
        if (mas1[i] !== mas2[i]) {
            TruthOrLie = false;
        }
    }

    return TruthOrLie;
}