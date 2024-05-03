const userInput1 = window.prompt("parola 1")
const userInput2 = window.prompt("parola 2")

if (!isNaN(Number(userInput1)) || !isNaN(Number(userInput2))){
    // ci sono numeri nella parola
    window.alert("Hai inserito dei numeri input non valido!")
} else if(userInput1.length === 0 || userInput2.length === 0){
    // scrivere almeno una lettera
    window.alert("Una delle parole è vuota, input non valido!")
} else if(userInput1.indexOf(' ') >= 0 || userInput2.indexOf(' ') >= 0){
    // ci sono spazi nella parola
    window.alert("inserire solo una parola e niente spazi, input non valido!")
} else if(userInput1.length > userInput2.length){
    console.log(userInput1, userInput2)
} else if(userInput2.length > userInput1.length){
    console.log(userInput2, userInput1)
} else {
    console.log("stessa lungehzza", userInput1, userInput2)
}
