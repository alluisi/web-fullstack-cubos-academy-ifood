const hoje = new Date();

/* GETs
console.log(hoje.getMonth()); // mês -1
console.log(hoje.getDay()); // dia da semana -1 (domingo -> 0)
console.log(hoje.getFullYear()); // ano com os 4 dígitos
*/

// hoje.setDate(1); altera para ontem
hoje.setDate(hoje.getDate() - 1); // também altera para ontem

console.log(hoje);
console.log(hoje.getHours());