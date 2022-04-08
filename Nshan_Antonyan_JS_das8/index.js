//---------clon------
// let users ={
//     name: "nshan",
//     lastName: "antonyan",
//     ary: {name2: "valod", lastName2: "antonyan",arry2:{age3: 30}}
// }
//
// let usersClon = clondeDeepObj({},users);
// users.ary.name="11111";
// console.log(users);
// // console.log(typeof usersClon);
//
// function clondeDeepObj(dest, obj){
//     for (let key in obj){
//         if (typeof obj[key] === "object"){
//             dest[key] = clondeDeepObj({}, obj[key]);
//         }else {
//             dest[key] = obj[key];
//         }
//     }
//     return dest;
// }

//------------------------------------


// var arr = [ 3, 1, 5, 2, 7, 4, 9, 10];
// arr.forEach((a,b)=>{
//     console.log(a);// element
//     console.log(b);// elementi index
// });

// let arr = [ 3, 1, 5, 2, 7, 4, 9, 10];
//
// function foreach (array, callback){
//  for (let i = 0; i< array.length; i++){
//
//      callback( i ,  array[i]);
//  }
// };
//
// foreach(arr,(item, index)=>{
//     console.log(item);
//     console.log(index);
// });

//-----------------------------------------

// let a =[1,2,3,4,5,6,7,8,9,10];
// a.splice(1,1,"nshan");
// console.log(a);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// function stringSlice( string, begin, end , ...element) {
//     let skisb=[];
//     let mejtex=[];
//     let verj=[];
//
//     for (let i = 0; i < string.length; i++){
//         for (let j = begin; j < begin+end; j++){
//             if (i < begin){
//                 skisb[i] = string[i];
//             }
//
//             if (begin <= begin+end){
//                 if (element){
//                     mejtex = element;
//                 }else {
//                     mejtex[i] = string[j];
//                 }
//             }
//             if (begin + end <= i){
//                 verj[i] = string[i];
//             }
//
//         }
//     }
//     string.length=0;
//     console.log(...skisb);
//     console.log(...mejtex);
//     console.log(...verj);
//     console.log(string);
//     for (let t = 0; t < skisb.length+mejtex.length+verj.length; t++){
//
//     }
// }
// stringSlice(arr, 1, 1, "m");