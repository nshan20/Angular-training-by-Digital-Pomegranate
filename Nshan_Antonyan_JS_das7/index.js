let arry = [];
function loto() {
    let usedNumbers = [];
    return function f() {
        if (usedNumbers.length === 100) {
            return ;
        }
        let num = Math.floor(Math.random() * 100) + 1;
        for (let i = 0; i < usedNumbers.length; i++) {
            if (num === usedNumbers[i]){
                return f();
            }
        }
        usedNumbers.push(num);
        return num;
    }

}
// let func = makeRand();

setInterval(()=>{
    if (arry.length < 100){
        arry.push(loto()());
        console.log(arry);
    }else {
        null;
    }
},3000);

console.log(arry);
