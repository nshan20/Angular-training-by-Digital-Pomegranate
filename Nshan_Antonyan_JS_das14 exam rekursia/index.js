let arrNumberString = [];

function example() {
    fetch(`https://my-json-server.typicode.com/AshotAleqs/exams/flatten`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let serv1 = data.data.example1.input;
            sumSalaries(serv1);
            console.log(arrNumberString);
        });
}
example();

function sumSalaries(data) {
    return data.reduce((prev, current) => {
        if (Array.isArray(current)) {
            return sumSalaries(current);
        }
        arrNumberString.push(current);
    }, 0);
}
