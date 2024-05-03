
// Devo effettuare una scelta
// 1. Decido che voglio poter avere accesso alla lista dei numeri inseriti
// 2. Non mi interesso dei numeri che sono stati inseriti e mantenfo solo media e somma

// provo a risolvere il problema lasciando scegliere all'utente quale opzione vuole 
// inserisco il check della versione nel loop consapevole del peso della cosa per una maggiore leggibilità e mantenibilità del codice


// definisco una costante numberOfInputRequests che di base varrà 10
const numberOfInputRequests = 10

// chiedo all'utente di scegliere la versione del codice che vuole inserendo un numero 1 o 2 nel prompt
// salvo l'input in una costante codeVersion


let codeVersion = parseInt(prompt(`
Questo sito per scelta dello sviluppatore adotta 2 versioni.
1. Non mi interesso dei numeri che sono stati inseriti e mantengo solo media e somma totali
2. Decido che voglio poter avere accesso alla lista dei numeri inseriti

Per scegliere la versione 2 digitare il numero 2. Qualsiasi altro valore imposterà la versione sulla versione 1 (versione di Default)
`))
// valido l'input altrimenti imposto la 1 come versione di default
if (codeVersion !== 2){
    codeVersion = 1
}



// definisco una variabile resultSumm
let resultSumm = 0

// definisco un array inputNumbers che verrà usato solo dalla versione 2
const inputNumbers = []

// creo un ciclo for che vada da 1 a numerOfInputrequests compreso
for (let i=1; i <= numberOfInputRequests; i++){
    //     per ogni iterazione chiedo all'utente un numero 
    const userInputNumber = parseInt(prompt(`Inserire solo numeri interi sia positivi che negativi.\nNumero ${i} di ${numberOfInputRequests}`))
    //     valido l'input
    if (isNaN(userInputNumber) === true){
        alert("valore non valido si prega di reinserire un numero.")
        i--
    } else {
        //     se la versione è la 2
        if (codeVersion === 2){
            //         pusho l'input dentro inputNumbers
            inputNumbers.push(userInputNumber)
        }
        //     aggiungo il valore del mio numero a resultSumm
        resultSumm += userInputNumber
    }
}


let outputAlert = `
COMPLETATO!
la somma è uguale a: ${resultSumm}
la media corrisponde a ${(resultSumm/numberOfInputRequests).toFixed(2)}
`
if (codeVersion == 2){
    outputAlert += `\n Valori inseriti: ${inputNumbers}`
} 

alert(outputAlert)
// so che la media dei valori mi verrà data dal rapporto tra resultSumm e numberOfInputRequests