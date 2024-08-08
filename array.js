let carro1 = "Fuscao"
let carro2 = "Brasilia"
let carro3 = "Fiesta"

const carro = [];
carro[0] = "celta";
carro[1] = "corsa";


console.log(carro);
console.table(carro);
console.log(carro.length);

let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);


let carroCopia2 = carro.slice();
let caaroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);


const frutas = ["uva", "maça", "banana", "morango"];

console.log(frutas);

frutas.pop()
console.log(frutas)


frutas.push("kiwi selvagem")
console.log(frutas)