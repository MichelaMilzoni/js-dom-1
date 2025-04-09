// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno del metodo string.includes()

// DO UNA FUNZIONE AL CLICK DEL BOTTONE
const button = document.getElementById('button-on-off');
const lamp = document.getElementById('white-lamp'); // metodo del DOM (Document Object Model) 
                                                    // che permette di accedere a un elemento HTML specifico 
                                                    // all'interno della pagina utilizzando il suo ID

button.addEventListener("click", () => {
// addEventListener("click", ...) = "Ascolta quando l'utente clicca sul bottone e esegui la funzione che ti passo"
// "click" = tipo di evento che vogliamo ascoltare
// () => {...} = arrow function, modo compatto di definire una funzione anonima
// funzione anonima = funzione in JavaScript che non ha un nome esplicito
 if (lamp.src.includes('white_lamp.png')) { //se il src della variabile lamp include 'white_lamp.png'
    lamp.src = '../img/yellow_lamp.png'; //allora cambio percorso e metto 'yellow_lamp.png'
    button.textContent = 'Spegni'; //cambio il testo in 'Spegni' 
    button.className = 'btn btn-dark'; // aggiorno la classe bootstrap per cambiare impostazione al bottone
    console.log("Immagine cambiata a 'black_lamp.png'. Bottone ora è 'btn-dark'.");
 } else { //altrimenti
    lamp.src = '../img/white_lamp.png'; // uso percorso originale e metto 'white_lamp.png'
    button.textContent = 'Accendi'; //cambio il testo in 'accendi' 
    button.className = 'btn btn-light'; // aggiorno la classe bootstrap per cambiare impostazione al bottone
    console.log("Immagine cambiata a 'white_lamp.png'. Bottone ora è 'btn-light'.");
 }
})