let arry = [];
function makeRand() {
    let usedNumbers = [];
    return function f() {
        if (usedNumbers.length === 10) {
            return ;
        }
        let num = Math.floor(Math.random() * 10) + 1;
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
    if (arry.length < 10){
        arry.push(makeRand()());
        console.log(arry);
    }else {
        null;
    }
},1000);

console.log(arry);
