// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)


// Inserimento dati nell'array
var arrayCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Prompt input utente del cognome
var cognomeInserito = prompt("Inserisci il cognome", "Inserisci: ");

// Push nell'array
arrayCognomi.push(cognomeInserito);
// console.log(arrayCognomi);

// Stampa con il for 
for (var i = 0; i < arrayCognomi.length; i++) {


    var listaPrecedente = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = listaPrecedente + "<li>" + (i + 1) + " " + arrayCognomi[i] + "</li>";

    // console.log(arrayCognomi[i]);
}



// stampa con il while -- levare il commenti.

// var i = 0;

// while (i < arrayCognomi.length) {  

//     var listaPrecedente = document.getElementById("lista").innerHTML;
//     document.getElementById("lista").innerHTML = listaPrecedente + "<li>" + (i + 1) + " " + arrayCognomi[i] + "</li>";

//     i++;
// }