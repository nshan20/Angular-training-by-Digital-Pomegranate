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






















