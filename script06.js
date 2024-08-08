let armas = ["Laser", "Mísseis", "Metralhadora", "Escudo Energético", "granada",];

let ataques = [];

ataques.push("ruby");
ataques.push(armas[4]);
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]); 

//console.log("nome do robô:" + ataques[0])

for (let i = 0; i < ataques.length; i++) {
    if (i == 0){  
        console.log( `nome do robô: ${ataques[i]}`); 
    }else{
        console.log(`ataques ${i}: ${ataques[i]}`);
    }
}