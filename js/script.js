/**
 * Chidere una parola all'utente
 * verificare se la parola è palindroma
 * stamapre il risultato
 */ 

var parolaUtente = prompt("Inserire una parola").toLowerCase();

console.log( "la tua parola",  controlloPalindromo(parolaUtente));

function controlloPalindromo(parola){
    var parolaReverse = "";
    
    for( i = parola.length - 1; i >= 0; i-- ){
        parolaReverse += parola[i];
    }

    if( parola === parolaReverse ){
        var risultato = "è un palindromo"
    }else{
        var risultato = "non è un palindromo"
    }

    return risultato;
}



/**
 * chiedere all'utente se desidera pari o dispari e un numero
 * generare un numero per il bot
 * somma dei 2 numeri
 * stabilie se somma è pari o dispari
 * stampa a video
 */

/* var userChoice = prompt( "Vuoi pari o dispari?" ).toLowerCase();
while(( userChoice != "pari" ) && ( userChoice != "dispari" )){
    userChoice = prompt( "Prego, inserire o pari o dispari" ).toLowerCase();
}
console.log(userChoice);

var userNum = parseInt( prompt( "Inserire un numero da 1 a 5" ));
while( isNaN( userNum ) || ( userNum < 1 ) || ( userNum > 5 ) ){
    userNum = parseInt(prompt( "Valore non valido! Prego inserire un numero da 1 a 5" ));
}
console.log(userNum);

var botNum = Math.floor( Math.random()*5 ) +1;
console.log(botNum);

var risultato = pariDispari(userNum, botNum);
console.log(risultato);

if( userChoice === risultato ){
    console.log("HAI VINTO!!!")
}else{
    console.log("Mi dispiace... hai perso...")
}


function pariDispari (num1, num2){
    var somma = num1 + num2;

    if( somma % 2 == 0) {
        var pariWin = "pari";
        return pariWin
    }else{
        var pariLose = "dispari";
        return pariLose
    }
} */