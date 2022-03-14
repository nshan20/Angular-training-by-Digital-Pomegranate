let arry = [];
function loto() {
    let usedNumbers = [];
    return function f() {
        if (usedNumbers.length === 100) {
            return;
        }
        let num = Math.floor(Math.random() * 100) + 1;
        for (let i = 0; i < usedNumbers.length; i++) {
            if (num === usedNumbers[i]) return f();
        }
        usedNumbers.push(num);
        return num;
    }
}

let func = loto();

setInterval(()=>{
    if (arry.length < 100){
        arry.push(func());
        if(arry.length === 100){
            console.log(arry);
        }
    }
},10);