function* generator(i){
    let x = 0;
    while(true){
        if(i){
            x+=i;
        }
        yield x;
        x++
    }
}

const gen = generator(0);

console.log(gen.next().value);
console.log(gen.next(3).value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value);
