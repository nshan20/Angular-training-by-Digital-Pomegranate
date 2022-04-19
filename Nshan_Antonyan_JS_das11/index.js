function* randomGenerationNumbers(n) {
    let arry = [];
    for (let i = 1; i <= n; i++){
        arry.push(i);
    }
    for (let i = 0; i<n; i++){
        let random = Math.floor(Math.random()*arry.length);
        let arryElement = arry[random];
        arry.splice(random,1);
        yield arryElement;
    }
}

for (let key of randomGenerationNumbers(100)){
    console.log(key);
}
