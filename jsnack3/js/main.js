// creo una variabile result = 0
let result = 0.0;
let fail = false

for (let i=0; i<10; i++){
    let userInput = parseFloat(window.prompt("inserisci un numero"))

    if (isNaN(userInput)){
        alert("valore non valido")
        fail = true
        break
    } else {
        result += userInput

    }
}


if (fail === true){
    console.log("valore non valido impossibile effettuare la somma")
} else {
    console.log(`il risultato è ${result}`)
}
// creo un loop da 0 a 9
//     ad ogni iterazione chiedo un numero 
//     trasformo l'input in formato di numero
//     sommpo l'input a result