// 1- Inseriamo in pagina HTML l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
    // DO UNA FUNZIONE AL CLICK DEL BOTTONE
    
    const button = document.getElementById('button-on-off'); // metodo del DOM (Document Object Model) 
                                                             // che permette di accedere a un elemento HTML specifico 
                                                             // all'interno della pagina utilizzando il suo ID
    const lamp = document.getElementById('white-lamp');

    let isLampOn = false; // variabile booleana per tracciare lo stato della lampadina (la lampada è accesa? falso)

    button.addEventListener("click", () => {
    // addEventListener("click", ...) = "Ascolta quando l'utente clicca sul bottone e esegui la funzione che ti passo"
    // "click" = tipo di evento che vogliamo ascoltare
    // () => {...} = arrow function, modo compatto di definire una funzione anonima
    // funzione anonima = funzione in JavaScript che non ha un nome esplicito
        if (isLampOn) {
            lamp.src = "../img/white_lamp.png"; // torna l'immagine originale
            button.textContent = "Accendi";
        } else {
            lamp.src = "../img/yellow_lamp.png"; //modifica l'immagine 
            button.textContent = "Spegni"; // cambia il testo del bottone
        }
    })


    console.log()