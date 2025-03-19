let input = window.prompt("Digite números separados por vírgula (ex: 1, 2, 3):");
let numeros = input.split(",").map(num => num.trim()); 

function somaArray(numeros) {
    let soma = 0; 
    for (let i = 0; i < numeros.length; i++) {
        let valor = Number(numeros[i]); 
        if (isNaN(valor)) { 
            return "Valor inválido detectado";
        }
        soma += valor; 
    }
    return soma;
}

console.log(somaArray(numeros));
