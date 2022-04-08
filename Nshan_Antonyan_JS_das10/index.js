let newPublication = {};

let allInformation = [];

let updatedInformation={};

let section = document.querySelector(".section");

let creatList = document.querySelector("#creatList");
let name_input = document.querySelector("#name_input");
let price_input = document.querySelector("#price_input");
let id_input = document.querySelector("#id_input");


function getTodosRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(function (json){
            allInformation.push(...json);
        }).then(function (){
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
            section.innerHTML="";
            htmlStyle(allInformation);
        } )
}

function updateTodosRequest(id, updatedInformation) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedInformation)
    }).then(response => response.json())
        .then(function (json){
            // console.log(json, "json PUT");
            for (let i = 0; i < allInformation.length; i++){
                if (allInformation[i].id === id){
                    allInformation[i] = json;
                }
            };
            section.innerHTML="";
            htmlStyle(allInformation);
            console.log(updatedInformation);
        } );
}

function removeTodosRequest(id, i) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => {
            allInformation.splice(i, 1);
            // console.log(allInformation);
            section.innerHTML="";
            htmlStyle(allInformation);
        })
};

function htmlStyle(arr) {
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

function updateElements(id) {
    for (let i = 0; i< allInformation.length; i++){
        if(allInformation[i].id === id){
            id_input.value = id;
            name_input.value = allInformation[i].title ;
            price_input.value = allInformation[i].completed ;
        }
    }
    if (id_input.value){
        creatList.addEventListener("click", function (){
            updatedInformation.id = id_input.value;
            updatedInformation.title = name_input.value;
            updatedInformation.completed = price_input.value;
            if (updatedInformation.title !== "" || updatedInformation.completed !== ""){
                updateTodosRequest(id, updatedInformation);
            }
        });
    }

};

creatList.addEventListener("click", function (){
    if (id_input.value === ""){
        newPublication.completed = price_input.value;
        newPublication.title = name_input.value;
        createTodosRequest(newPublication);
        price_input.value = "";
        name_input.value = "";
    }
});
