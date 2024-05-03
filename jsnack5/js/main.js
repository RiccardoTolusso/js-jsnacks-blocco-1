// Crea un array vuoto.
const oddNUmbers = []
// Chiedi per 6 volte all’utente di inserire un numero,
const numberOfInputRequests = 6

for(let i = 1; i <= numberOfInputRequests; i++){
    // Se è dispari inseriscilo nell’array.
    const userNumber = parseInt(prompt(`Inserisci un numero intero maggiore di 0\nNumero ${i} di ${numberOfInputRequests}:`))
    if (//CONDIZIONI DI VALIDAZIONE
        isNaN(userNumber) || //controllo se non viene inserito un numero
        userNumber <= 0 // controllo che il numero sia maggiore di zero
    ){
        // se non rispetta le condizioni di validazione
        alert("Il numero inserito non rispetta i criteri prestabiliti, pertanto non verrà conteggiato.\nReinserire un numero valido")
        i--
    } else {
        // se il numero è valido
        // controllo se è pari
        if ((userNumber/2) % 1 === 0){
            console.log(`${userNumber} è pari.`)
        } else {
            // se è dispari
            oddNUmbers.push(userNumber)
            console.log(`${userNumber} è dispari. Ed è stato inserito in oddNumbers`)
        }
    }
}

// Stampa in console l'array risultante.
console.log(`Lista risultante:\t${oddNUmbers}`)
alert(`I numeri dispari da te inseriti sono:\n${oddNUmbers}`)