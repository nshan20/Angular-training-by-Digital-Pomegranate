let newPublication = {};

let allInformation = [];

let updatedInformation={};

let section = document.querySelector(".section");

let creatList = document.querySelector("#creatList");
let name_input = document.querySelector("#name_input");
let price_input = document.querySelector("#price_input");
let id_input = document.querySelector("#id_input");

let creatList2 = document.querySelector("#creatList2");

function getTodosRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(function (json){
            allInformation.push(...json);
        })
        .then(function (){
        htmlStyle(allInformation);
    })
}
getTodosRequest();


function createTodosRequest(newPublication) {
    fetch('https://jsonplaceholder.typicode.com/todos/',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPublication)
    })
        .then(response => response.json())
        .then(function (json){
            allInformation.unshift(json);
            htmlStyle(allInformation);
            price_input.value = "";
            name_input.value = "";
        } )
}

function updateTodosRequest(id, updatedInformation) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedInformation)
    })
        .then(response => response.json())
        .then(function (json){
            for (let i = 0; i < allInformation.length; i++){
                if (allInformation[i].id === +id){
                    allInformation[i] = json;
                }
            };
            return json;
        } )
        .then(data=>{
            htmlStyle(allInformation);
            price_input.value = "";
            name_input.value = "";
            id_input.value = "";
        });
}

function removeTodosRequest(id, i) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => {
            allInformation.splice(i, 1);
            // console.log(allInformation);
            htmlStyle(allInformation);
        })
};

function updateElements(id) {
    for (let i = 0; i< allInformation.length; i++){
        if(allInformation[i].id === id){
            id_input.value = allInformation[i].id;
            name_input.value = allInformation[i].title ;
            price_input.value = allInformation[i].completed ;
        }
    }
};

creatList.addEventListener("click", function (){
    if (id_input.value === ""){
        newPublication.completed = price_input.value;
        newPublication.title = name_input.value;
        createTodosRequest(newPublication);
    }
    if (id_input.value){
        updatedInformation.id = id_input.value;
        updatedInformation.title = name_input.value;
        updatedInformation.completed = price_input.value;
        updateTodosRequest(id_input.value, updatedInformation);
    }
});

function htmlStyle(arr) {
    section.innerHTML="";
    for (let i = 0; i < arr.length; i++){
        section.innerHTML += `
            <dov class="product_block">
                <div class="products">${arr[i].id} </div>
                <div class="products"> ${arr[i].title}</div>
                <div class="products">${arr[i].completed}</div>
                <div class="products">
                    <span class="material-icons-outlined" onclick="removeTodosRequest(${arr[i].id}, ${i})">delete_forever</span>
                    <span class="material-icons-outlined" onclick="updateElements(${arr[i].id})">edit</span>
                </div>
            </dov>
        `;
    }

}