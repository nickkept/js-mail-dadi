// Creo array mail 
const elencoMail = ["topogigio@gmail.com", "nickit1899@gmail.com", "esempio@gmail.com", "fakemail@gmail.com"];
// controllo se riesco a ricavarlo nella console 

console.log(elencoMail);

const userMail = prompt(`Inserisci mail`)
let found = false;
// avvio ciclo for 

for (let i = 0; i < elencoMail.length; i++) {
    const elementoElenco = elencoMail[i];


    if (elementoElenco === `nickit1899@gmail.com`) {
        found = true;
    }
}

if (found === true) {

    alert(`Hai inserito la mail giusta`);
} else {
    alert(`Hai inserito la mail sbagliata`)
}