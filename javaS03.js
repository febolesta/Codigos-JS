let palavra = window.prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");

function verificaPalindromo(palavra) {
    palavra = palavra.replaceAll(" ", "").toLowerCase(); 
    console.log(palavra);

    let palavraInvertida = palavra.split("").reverse().join(""); 
    if (palavra === palavraInvertida) {
        return true; 
    } else {
        return false; 
    }
}

console.log(verificaPalindromo(palavra)); 