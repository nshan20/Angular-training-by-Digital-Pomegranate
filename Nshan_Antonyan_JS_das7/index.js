let arry = [];
function loto() {
    let usedNumbers = [];
    return function f() {
        if (usedNumbers.length === 10) {
            return;
        }
        let num = Math.floor(Math.random() * 10) + 1;
        for (let i = 0; i < usedNumbers.length; i++) {
            if (num === usedNumbers[i]) return f();
        }
        usedNumbers.push(num);
        return num;
    }
}

let func = loto();

setInterval(()=>{
    if (arry.length < 10){
        arry.push(func());
        console.log(arry);
    }
},1000);
