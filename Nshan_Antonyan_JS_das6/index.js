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

//---------------------------------------------------------------

//4
// let arr = [
//         [ 1, 2, 3, 4, 5 ],
//         [ 5, 6, 7, 8, 9 ],
//         [ 20, 21, 34, 56, 100 ]
// ];
//
// function filterArry(arr){
//         let min = 0;
//         let mas ;
//         for (let i = 0; i<arr.length; i++){
//                 let sum =arr[i][0];
//                 mas = arr[i];
//                 for (let j = 0; j<mas.length;j++){
//                         if (sum > mas[j]){
//                                 sum = mas[j];
//                         }
//                 }
//                 mas="";
//                 min += sum;
//         }
//         console.log(min);
// }
//
// filterArry(arr);

//------------------------------------------------------------------


var books = [
    { type: 'kensabanutyun', name: 'Kensabanutyan 2-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 3-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 4-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 5-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 6-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 7-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 8-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 9-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 10-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 11-rd dasarani dasagirq' },
    { type: 'kensabanutyun', name: 'Kensabanutyan 12-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 2-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 3-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 4-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 5-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 6-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 7-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 8-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 9-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 10-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 11-rd dasarani dasagirq' },
    { type: 'ashxaragrutyun', name: 'Ashxaragrutyan 12-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 2-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 3-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 4-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 5-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 6-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 7-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 8-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 9-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 10-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 11-rd dasarani dasagirq' },
    { type: 'hanrahashiv', name: 'Hanrahashvi 12-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 2-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 3-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 4-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 5-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 6-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 7-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 8-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 9-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 10-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 11-rd dasarani dasagirq' },
    { type: 'erkrachaputyun', name: 'Erkrachaputyan 12-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 2-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 3-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 4-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 5-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 6-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 7-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 8-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 9-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 10-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 11-rd dasarani dasagirq' },
    { type: 'mayreni', name: 'Hayoc Lezvi 12-rd dasarani dasagirq' },
];

let arrTitle = ["kensabanutyun","ashxaragrutyun","hanrahashiv","erkrachaputyun","mayreni"];
let sortedBooks = {};
let sumar ="";

function filterF(){
    for (let j =0; j <arrTitle.length; j++){
        for (let i = 0; i <books.length; i++){
            if (arrTitle[j] === books[i].type){
                sumar += [books[i].name];
            }
        }
        sortedBooks[arrTitle[j]] = [sumar];
        sumar="";
    }
}
filterF()
console.log(sortedBooks);
