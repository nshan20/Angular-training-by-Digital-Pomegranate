// let Titan_Button = document.querySelector("#Titan_Button");
// let Aluminum_Button = document.querySelector("#Aluminum_Button");
// let Plastic_button = document.querySelector("#Plastic_button");

// let Titan_input = document.querySelector("#Titan_input");
// let Aluminum_input = document.querySelector("#Aluminum_input");
// let Plastic_input = document.querySelector("#Plastic_input");

// let Material_spec = document.querySelector("#Material_spec");
// let Color_spec = document.querySelector("#Color_spec");
// let Count_spec = document.querySelector("#Count_spec");
// let button_spec = document.querySelector("#button_spec");

// let arr = [];
// let arr1 = [];
// let arr2 = [];
// let arrSpec = [];

class Xanut {
    constructor() {
        // this.pieces = pieces;
        // // this.arr = arr;
        // this.material = material;

        this.arrTitan = [];
        this.arrAluminum = [];
        this.arrPlastic = [];
        this.arrSpec = [];

        this.order(this.Titan_Button, this.Titan_input, this.arrTitan, "Titan");
        this.order(this.Aluminum_Button, this.Aluminum_input, this.arrAluminum, "Aluminum");
        this.order(this.Plastic_button, this.Plastic_input, this.arrPlastic, "Plastic");
        this.order(this.button_spec, this.Count_spec, this.arrSpec, {"Material_spec":this.Material_spec, "Color_spec": this.Color_spec});
    }

    Titan_Button = document.querySelector("#Titan_Button");
    Aluminum_Button = document.querySelector("#Aluminum_Button");
    Plastic_button = document.querySelector("#Plastic_button");

    Titan_input = document.querySelector("#Titan_input");
    Aluminum_input = document.querySelector("#Aluminum_input");
    Plastic_input = document.querySelector("#Plastic_input");

    Material_spec = document.querySelector("#Material_spec");
    Color_spec = document.querySelector("#Color_spec");
    Count_spec = document.querySelector("#Count_spec");
    button_spec = document.querySelector("#button_spec");

    order(Button, input, arr, material){
        Button.addEventListener("click", ()=>{
            this.itemSize(+input.value, arr, material);
        });
    }

    itemSize( input, arr, material) {
        // alert(input.value);
        // this.itemSize = this.pieces;
        new Gorcaran(input, arr, material).multiplication();

    }
}

class Gorcaran {
    constructor(production, arr, material) {
        this.production = production;
        this.arr = arr;
        this.material = material;
    }
    multiplication(){
        this.arr = [];
        let sum;
        let kg;
        let color;
        let test = true;
        let material = this.material;
        let totalCost = 0;
        let mater = [
            {title:"Titan", prices: 200, kg:3, color: "Black"},
            {title:"Aluminum", prices: 100, kg:2, color: "Silver"},
            {title:"Plastic", prices: 0, kg:1,color: "White" }
        ];
        for (let i = 0; i<mater.length; i++){
            if (material === mater[i].title){
                sum = new Aprank().prices + mater[i].prices;
                kg = new Aprank().kg + mater[i].kg;
                color = mater[i].color;
                test = false;
            }
        }
        if (test) {
            sum = new Aprank().prices + 900;
            kg = new Aprank().kg + 5;
            color = this.material.Color_spec.value;
            material = this.material.Material_spec.value;
        }
        for (let i = 0; i < this.production; i++){
            totalCost += sum;
            this.arr.push({id:i , "kg": kg," material": material ,"color": color, productPrice: sum});
        }
        this.arr.push({totalAmount:totalCost + "$"});
        console.log(this.arr);
    }
}

class Aprank {
    constructor() {
    }
    kg = 1;
    prices = 100;
}
new Xanut().order();
// function order( Button, input, arr, material) {
//     Button.addEventListener("click", function () {
//         new Xanut(input.value, arr, material).itemSize();
//     });
// }
//
// order(Titan_Button, Titan_input, arr, "Titan");
// order(Aluminum_Button, Aluminum_input, arr1, "Aluminum");
// order(Plastic_button, Plastic_input, arr2, "Plastic");
// order(button_spec, Count_spec, arr3, {"Material_spec":Material_spec, "Color_spec": Color_spec});

//-----------------------------------------------------------------------------------------------------

// class scrollHelper{
//     constructor() {
//         this.scrollElement = document.querySelector(".foo");
//         this.scrollElement.addEventListener("click", () => {
//             this.logSomething();
//         });
//     }
//
//    count = 1;
//     logSomething(){
//         console.log(this.count);
//         this.count++;
//     }
// }
//
// new scrollHelper();
