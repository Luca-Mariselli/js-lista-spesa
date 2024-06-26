// MILESTONE 1:
// Create il vostro array con una serie di elementi.
// Iterate usando un ciclo FOR per stampare ogni elemento in CONSOLE.
// MILESTONE 2:
// Convertite il ciclo FOR in un WHILE. Dovrete gestire il contatore manualmente.
// MILESTONE 3:
// Invece di stampare in console, inserite ogni elemento in pagina, magari in un <li>
// BONUS 1:
// Se non l'avete già fatto prima, provate a scrivere in pagina sia tramite template literal 
// (stringata su .innerHtml) che con il createElement (append).
// BONUS 2:
// Sbizzarritevi e giocate con l'esercizio.


// creo array
let lista = [
    `frutta`,
    `verdura`,
    `pane`,
    `carne`,
    `zucchero`,
    `sottaceti`
]

// aggiungo collegamento alla mia ul
const listaPg = document.getElementById(`lista`);

// // stampo array in console
// console.log(lista)

// // creo ciclo for per stampare array in console
// for(let i = 0; i < lista.length; i++){
//     const oggetto = lista[i]
//     console.log(i, oggetto)
// }

// trasformo il for in while
let i = 0
while(i < lista.length){
    const oggetto = lista[i]

    // // stampo in pagina con innerHtml
    // listaPg.innerHTML += `<li>${oggetto}</li>`

    // stampo in pagina con append
    const liElement = document.createElement(`li`);
    liElement.innerText = oggetto;
    listaPg.append(liElement)
        
    i++
}