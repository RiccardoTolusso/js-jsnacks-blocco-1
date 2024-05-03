Snack 9
Calcola la somma e la media dei primi 10 numeri.
Stampa i risultati on console

Devo effettuare una scelta
1. Decido che voglio poter avere accesso alla lista dei numeri inseriti
2. Non mi interesso dei numeri che sono stati inseriti e mantenfo solo media e somma

provo a risolvere il problema lasciando scegliere all'utente quale opzione vuole 
inserisco il check della versione nel loop consapevole del peso della cosa per una maggiore leggibilità e mantenibilità del codice


definisco una costante numberOfInputRequests che di base varrà 10

chiedo all'utente di scegliere la versione del codice che vuole inserendo un numero 1 o 2 nel prompt
valido l'input altrimenti imposto la 1 come versione di Default
salvo l'input in una costante codeVersion

definisco una variabile resultSumm


definisco un array inputNumbers che verrà usato solo dalla versione 2

creo un ciclo for che vada da 1 a numerOfInputrequests compreso

    per ogni iterazione chiedo all'utente un numero 
    valido l'input
    
    se la versione è la 2
        pusho l'input dentro inputNumbers

    aggiungo il valore del mio numero a resultSumm

so che la media dei valori mi verrà data dal rapporto tra resultSumm e numberOfInputRequests


