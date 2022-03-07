let arr= [1,2,3,40,5,6,7,40,8,9];
let number = Number(prompt());
function fancSimilar(arr, number){
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === +number){
            alert(i);
        }
    }
}
fancSimilar(arr, number);