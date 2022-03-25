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
// a.splice(2,1,);
// console.log(a);

var arr = [1,2,3,4,5,6,7,8,9,10];

function stringSlice( string, begin, end ) {
    let newString = '';

    end = end || string.length ;

    for(let i = begin; i < end; i++) {
        newString += string[i];
    }

    return newString;
}
console.log(stringSlice(arr, 1, 5));


