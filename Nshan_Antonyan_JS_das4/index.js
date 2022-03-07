// 1
// let value = prompt("bar", "hello");
// function reverseString(str) {
//     let newString = "";
//    for (let i = str.length-1; i >= 0; i--){
//        newString += str[i];
//    }
//     return newString;
// }
// alert(reverseString(value));
//-----------------------------------------------------------
//2
// let a = 5;
// let b = 4;
// let c = 6;
//
// function triangle(a,b,c){
//     if ((a + b > c) && (c + b > a) && (c + a > b)){
//         alert("hnaravor e");
//     }else {
//         alert("hnaravor che");
//     }
// }
// triangle(a,b,c);
//--------------------------------------------------------
//3
// let array  =  [1, 2, 2, 6,2, 3, 4, 2,60, 2, 3, 3, 4, 5];
// let result = [];
//
// function sortingArr(arr){
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i+1; j < arr.length; j++){
//             if (arr[i] > arr[j]){
//                 let sum = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = sum;
//             }
//         }
//     }
//     return arr;
// }
// sortingArr(array);
//
// function filtrArr(eventSum){
//     for (let index = 0; index < eventSum.length; index++){
//         if (eventSum[index] !== eventSum[index +1]){
//             result.push(eventSum[index]);
//         }
//     }
// }
// filtrArr(array);
// console.log(result);