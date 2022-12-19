//intro
alert
(`Benvenuto utente!
Rispondi alle prossime domande per calcolare il prezzo finale del tuo biglietto:`);

// chiedere all'utente il numero di km che vuole percorrere
const kilometers = prompt('Quanti km devi percorrere?');
console.log (kilometers); //debug

// chiedere all'utente l'età del passeggero
const age = prompt('Quanti anni ha il passeggero?');
console.log (age); //debug

// calcolare il prezzo pieno del biglietto
const fullPrice = kilometers * 0.21;
console.log (fullPrice); //debug

// scegliere lo sconto in base all'età e calcolare il prezzo finale
let finalPrice = fullPrice; //variabile che conterrà il prezzo finale, inizializzata con il prezzo pieno

if (age >= 65) {
    finalPrice = fullPrice - (fullPrice * 40 / 100);
}

else if (age < 18) {
    finalPrice = fullPrice - (fullPrice * 20 / 100);
}

// arrotondare il prezzo finale
finalPrice = finalPrice.toFixed(2);

// mostrare il prezzo finale
document.getElementById('finalPriceLog').innerHTML= finalPrice;