// script.js
document.getElementById("calcola").addEventListener("click", function() {
    let numero = document.getElementById("numero").value;
    let risultato = document.getElementById("risultato");
    
    if (numero === "" || numero < 0) {
        risultato.textContent = "Inserisci un numero valido!";
        return;
    }
    
    let fattoriale = 1;
    for (let i = 1; i <= numero; i++) {
        fattoriale *= i;
    }
    
    risultato.textContent = `Il fattoriale di ${numero} è ${fattoriale}`;
});