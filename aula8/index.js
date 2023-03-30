const nome = 'Manoel';
const sobrenome = 'Monteiro';
const idade = 27;
const peso = 60;
const altura = 1.70;
let imc = peso / (altura * 2);
let anoNasc = 2023 - idade;

//  Saída utilizando template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg. Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}`);

