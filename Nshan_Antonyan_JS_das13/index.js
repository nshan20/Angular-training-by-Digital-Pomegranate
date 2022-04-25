let click = document.querySelector("#click");
let arr = [1,2,3,4,5,6];
let count = arr[arr.length -1] + 1;

function f() {
    [, ...arr] = [...arr, count];
    count++;
    return arr;
}

click.addEventListener("click", function () {
    console.log(f());
});