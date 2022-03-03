let arr = [10,2,3,4,5,60,99,1,80,9];
let rezult = document.querySelector(".rezult");

document.querySelector(".arr").innerHTML = arr;
let clickMin = document.querySelector(".min");
let clickMax = document.querySelector(".max");

function maxElement (list, minMax){
    let max = 0;
    let min = list[0];
    for(let i = 0; i < list.length; i++){
        if(list[i] < min){
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
    }
    if (minMax === "min"){
        return min;
    }
    if (minMax === "max"){
        return max;
    }

}


clickMin.addEventListener("click", function (){
    rezult.innerHTML=maxElement(arr,"min");
});
clickMax.addEventListener("click", function (){
    rezult.innerHTML=maxElement(arr,"max");
});