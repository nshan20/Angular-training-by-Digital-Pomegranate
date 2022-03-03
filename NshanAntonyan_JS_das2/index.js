let arr = [1,20,3,40,5,6,70,8,9,10,99];
let sum = 0;

function fank(){
    for (let i =0; i<arr.length; i++){
        if (arr[i] > sum){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(fank());


// minchev 100.000 - 15% ekamtahark
// 100.000 - 500.000 - 20% ekamtahark
// 500.000 - 1.000.000 - 25% ekamtahark
// 1.000.000 - 2.500.000 - 30% ekamtahark
// 2.500.000 - 5.000.000 - 35% ekamtahark

// let fixedSalaries = [100000, 500000, 1000000, 2500000, 5000000];
// let percent = [15, 20, 25, 30, 35];
// let salary = prompt('salary');
//
// function getSessionId(number) {
//     if (number == Number(number)) {
//         function getPercent(sum) {
//             if (sum < 99000) {
//                 return `dzer ashxatavarc@ chi hamapatasxanum normerin`;
//             } else if (sum > 5000000) {
//                 return `Tvyal ashxatavardzi depqum ekamtahark@ ${percent[percent.length-1]}% e`;
//             }
//
//             for (let i = 0; i < fixedSalaries.length; i++) {
//                 if (sum <= fixedSalaries[i]) {
//                     return `Tvyal ashxatavardzi depqum ekamtahark@ ${percent[i]}% e`;
//                 }
//             }
//         }
//
//         alert(getPercent(number));
//     } else {
//         alert("grek dzer ashxatavardzi qanak@ miyanin tverov");
//     }
// }
//
// getSessionId(salary);

//-------------------------------------------------------------------------------

// let sum = 3;
// let test = document.querySelector(".test");
//
// function funk (){
//
//     for (let i = 0; i <= 60; i++){
//
//
//             if (i % sum === 0){
//                 console.log("karmir1--"+i+"--"+sum);
//
//                 setTimeout(function () {test.style.background ="red";},2000);
//             }
//
//
//             if (i % sum === 1){
//                 console.log("dexin2--"+i+"--"+sum);
//
//                 setTimeout(function () {test.style.background ="yellow"; },2000);
//             }
//
//
//             if (i % sum === 2){
//                 console.log("kanach3--"+i+"--"+sum);
//
//                 setTimeout(function () {test.style.background ="green";},2000);
//             }
//
//     }
// }
//
//
//
// funk();






























