//1
// let str = prompt("grek naxadasutyun");
// let sum = [0,];
// let barer ="";
// let masiv = [];
// function stringLeng(str){
//         for (let i = 0; i<str.length; i++){
//             if (str[i] === " "){
//                 sum.push(i);
//             }
//         }
//     sum.push(str.length-1);
//     let finish = sum[sum.length-1];
//
//         for (let j = 0; j<sum.length; j++){
//                 if (sum[j] !== finish){
//                     // alert(sum[j] +" "+ sum[j+1]);
//                     for (let index = sum[j]; index <= sum[j+1]; index++){
//                          barer += str[index];
//                     }
//                     masiv.push(barer);
//                     barer = "";
//                 }
//         }
//     // console.log(masiv);
//
//         for (let Iindex = 0; Iindex< masiv.length; Iindex++){
//             for (let Jindex = Iindex+1; Jindex< masiv.length; Jindex++){
//
//                 let Imasiv = masiv[Iindex].length;
//                 let jmasiv = masiv[Jindex].length;
//
//                 if (Imasiv < jmasiv){
//                     let sumarniElement = masiv[Iindex];
//                     masiv[Iindex] = masiv[Jindex];
//                     masiv[Jindex] = sumarniElement;
//                 }
//             }
//         }
//         // console.log(masiv);
//         alert(masiv[0]);
// }
// stringLeng(str);

//-----------------------------------------------

//2
// let arr = [];
// function test() {
//     let num = 18;
//     for (let i = 1; i <= num; i++) {
//         for (let j = 0; j<= num; j++){
//             if (num / i === j){
//                 arr.push(j)
//             }
//         }
//     }
// }
// test();
// alert(arr);

//------------------------------------------------

//3
// function numberTest(num1, num2){
//     if (num1 % 2 === 0 && num2 % 2 === 0){
//         alert(num1 * num2);
//     }
//
//     if (num1 % 2 === 1 && num2 % 2 === 1){
//         alert(num1 + num2);
//     }else if (num1 % 2 === 1){
//         alert(num1);
//     }else if ( num2 % 2 === 1){
//         alert(num2);
//     }
// }
// numberTest(8,9);

