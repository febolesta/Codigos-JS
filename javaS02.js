let numero = window.prompt("Digite um número");

function primo() {

    if (isNaN(numero)) {
        return "Valor inválido detectado";
    }

    if (numero <= 1) {
        return false; 
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;  }
    }
    return true; 
}

console.log(primo()); 
