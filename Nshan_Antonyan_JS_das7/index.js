let arryGenerator = [];
function loto() {
    let usedNumbers = [];
    return function f() {
        if(usedNumbers.length === 100){
            return
        }
        let num = Math.floor(Math.random()*100)+1;
        for (let i = 0; i< usedNumbers.length; i++){
            if (num === usedNumbers[i]){
                return f();
            }
        }
        usedNumbers.push(num);
        return num;
    }
}
let func = loto();

let arryG ;
let intervalRandom = setInterval(() => {
    if (arryGenerator.length < 100) {
        arryGenerator.push(func());
        let random = document.querySelector(".random");
        let div = document.createElement("div");
        div.className = 'randomEl';
        random.append(div);
        div.innerHTML = arryGenerator[arryGenerator.length - 1];
        arryG = arryGenerator[arryGenerator.length - 1];
        // console.log(arryG);
    }else {
        clearInterval(intervalRandom);
    }
}, 100);


//-----------------------------------

let card = [
    [[1,9], [10,19], [20,29], [30, 39], [40,49], [50,59], [60,69], [70,79], [80,89]],
    [[1,9], [10,19], [20,29], [30, 39], [40,49], [50,59], [60,69], [70,79], [80,89]],
    [[1,9], [10,19], [20,29], [30, 39], [40,49], [50,59], [60,69], [70,79], [80,89]]
];

function cartLoto(){
    let masivCart = [ liet1=[], liet2=[], liet3=[]];
    let sumArr;
        for (let i = 0;i <card.length; i++){
            for (let j= 0; j <card[i].length; j++){
                  sumArr = Math.floor(Math.random()*9) + card[i][j][0] ;
                 masivCart[i][j] = sumArr ;
            }
        }
    return masivCart;
}
//-----------------
function randomUniqueNum(range, outputCount) {
    let arr = [];
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }
    let result = [];
    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random] - 1);
        arr[random] = arr[range - i];
    }
    return result;
}
//-----------------
function randomEl(){
    let masivList = cartLoto();
    for (let i=0;i <masivList.length;i++){
        let elementRand = randomUniqueNum(9,9);
        for (let j = 0; j<4; j++){
            masivList[i][elementRand[j]] = "&nbsp;";
        }
    }
    return masivList;
}

function noRipid(){
        let filtrArry = randomEl();
        let listfiltr = [];
        for (let i =0; i < filtrArry.length; i++){
            for (let j =0; j< filtrArry[i].length; j++){
                    if (typeof filtrArry[i][j] !== 'string'){
                        listfiltr.push(filtrArry[i][j]);
                    }
            }
        }
        listfiltr.sort(function (a, b){
            return a - b;
        });
        for (let index = 0; index< listfiltr.length; index++){
            if (listfiltr[index] === listfiltr[index+1]){
                // console.log(listfiltr[index]);
                return noRipid();
            }
        }
        for (let cartIndex = 0; cartIndex < 9; cartIndex++){
            if(typeof filtrArry[0][cartIndex] === 'string' &&
                typeof filtrArry[1][cartIndex] === 'string' &&
                typeof filtrArry[2][cartIndex] === 'string'){
                return noRipid();
            }
        }
        return filtrArry;
}

function decorationDiv(){
    let listArr =  noRipid();
    let table = document.querySelector(".table");
    let div = document.createElement("div");
    div.className = 'circle';
    table.append(div);

    for (let i= 0; i< listArr.length;i++){
        for (let j= 0; j< listArr[i].length;j++){
            let blog = document.createElement("div");
            blog.className = 'blog';
            div.append(blog);
            blog.innerHTML += listArr[i][j];
            //------------------
            setInterval(()=>{
                if (listArr[i][j] === arryG){
                    // console.log(blog.innerHTML);
                    blog.style.background = "red";
                }
                },100);
        }
    }
    console.log("----------");
 return listArr;
};

function aeh() {
    let valod = [];
    let arry = decorationDiv();

    let xer = setInterval(()=>{
        for (let i = 0; i< arry.length; i++){
            for (let j = 0; j< arry[i].length; j++){
                if (arry[i][j] === arryG){
                    valod.push(arry[i][j]);
                }
            }
        }

        if (valod.length >= 15){
            clearInterval(xer);
            clearInterval(intervalRandom);
            alert(" xaxi verj ");
        }
    }, 100);
}
aeh();
aeh();
aeh();
aeh();