jogador = window.prompt("Digite pedra, papel ou tesoura: ");

 function pedraPapelTesoura(jogador){
    var numero = Math.floor(Math.random() * 3); 

   
    if(numero == 0){
        computador = "pedra";
    }else if(numero == 1){
        computador = "papel";
    }else{
        computador = "tesoura";
    }

    console.log(computador);

    // Verificando o resultado
    if(jogador == computador){
        return "Empate!";

    } else if(
        (jogador == "pedra" && computador == "tesoura") ||
        (jogador == "papel" && computador == "pedra") ||
        (jogador == "tesoura" && computador == "papel")
    ) {
        return "Você ganhou!";

    } else{
        return "Você perdeu!";
    }    
 }

 console.log(pedraPapelTesoura(jogador));