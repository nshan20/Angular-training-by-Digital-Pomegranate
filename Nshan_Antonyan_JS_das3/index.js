let arr = [
    {name: "alur", gin: 10, url:"https://eda.ru/img/eda/c464x302/s1.eda.ru/StaticContent/Photos/120131085333/120403130155/p_O.jpg"},
    {name: "bribc", gin: 20, url:"https://static.1000.menu/img/content-v2/81/ac/17470/vozdushnyi-ris-v-domashnix-usloviyax_1588413267_3_max.jpg"},
    {name: "kat", gin: 40, url:"http://musculardevelopment.ru/newsphoto/img5122.jpg"},
    {name: "jur", gin: 60, url:"https://old.yerkirmedia.am/wp-content/uploads/2016/11/jur-2-634x445.png"},
    {name: "vosp", gin: 30, url:"https://do0k106j28h8c.cloudfront.net/am-am/vegetables/1535536257/vosp_tmb.jpg"},

];

function hashvark(){
    for (let i = 0; i<arr.length; i++){
        for (let j = i+1; j <arr.length; j++){
            if (arr[i].gin > arr[j].gin){
                const sum = arr[i];
                arr[i] = arr[j];
                arr[j] = sum;
            }
        }
    }

}
hashvark();
console.log(arr);
let marr = arr;

function showCart(){
    let blogCart = document.querySelector(".blogCart");
    for (let i = 0; i< marr.length; i++){
        blogCart.innerHTML += `
        <div class="cart">
            <img src=${marr[i].url} alt="a">
            <p>${marr[i].gin}</p>
            <h3>${marr[i].name}</h3>
        </div>
        `;
    };
}
showCart();