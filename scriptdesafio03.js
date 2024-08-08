let quantidadePalmas = 20;
let sequenciaPalmas = "";

for (let i = 1; i <= quantidadePalmas; i++) {
        sequenciaPalmas = sequenciaPalmas + "👏"
if ( i %5 === 0){
     sequenciaPalmas = sequenciaPalmas + "🎉"
    }
}
console.log(sequenciaPalmas)