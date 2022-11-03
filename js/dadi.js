// creo numeri random 
const nrGiocatore = Math.floor(Math.random() * 6) + 1;
const nrComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Numero computer: ${nrComputer}`, `Numero giocatore: ${nrGiocatore}`);
if (nrComputer > nrGiocatore) {
    console.log(`Computer Vince`);
} else if (nrGiocatore > nrComputer) {
    console.log(`Giocatore Vince`)
} else (console.log(`Pareggio`))