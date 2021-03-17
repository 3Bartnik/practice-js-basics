
/* rozwiązanie z pętlą for */
const x = prompt('Podaj liczbę!');
if (x <= 9 && x > 1) {
    for (let i= 1; i <= 9; i++) {
        let multiply = x * i;
        console.log(`${i} x ${x} = ${multiply}`);
    }
} else {
    alert ("Proszę wybrać liczbę od 1 do 9");
}


/* rozwiązanie z pętlą while  */