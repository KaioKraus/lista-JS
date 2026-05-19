function verificaLetra(){

    let letra=prompt("Insira uma letra do alfabeto");

    if(letra == "a"||letra == "e"||letra == "i"||letra == "o"||letra == "u"){
        console.log("Vogal");
    }else{
        console.log("Consoante");
    }

}