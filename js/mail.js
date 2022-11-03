// Creo array mail 
const elencoMail = [ "topogigio@gmail.com", "nickit1899@gmail.com", "esempio@gmail.com", "fakemail@gmail.com" ];
// controllo se riesco a ricavarlo nella console 
console.log(elencoMail);

let found = false;
// avvio ciclo for 

for ( let i = 0; i < elencoMail.length; i++ ) {
    
    if (elencoMail === `nickit1899@gmail.com`) {
        found = true;
        console.log(elencoMail[i]);
    }
}

if (found === true) {
    console.log( variabileElenco );
    alert( `Hai inserito la mail giusta`);
}