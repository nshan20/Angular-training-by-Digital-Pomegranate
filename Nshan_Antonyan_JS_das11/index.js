function* randomGenerationNumbers(n) {
    let arry = [];
    for (let i = 1; i <= n; i++){
        arry.push(i);
    }
    for (let i = 0; i<n; i++){
        let random = Math.floor(Math.random()*arry.length);
        yield arry[random];
        arry.splice(random,1);
    }
}

for (let key of randomGenerationNumbers(100)){
    console.log(key);
}