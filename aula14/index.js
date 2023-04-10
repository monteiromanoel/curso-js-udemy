// Quanto se trata de contas, o JS segue o padrão IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // Era pra ser 1.0, mas o JS apresenta uma inconsistência.

console.log(num1); // Vai retornar o valor 0.99999999999999
num1 = parseFloat(num1.toFixed(2)); // Usa-se o conversor de string para float para poder arredondar o valor, transformando-o em int. Estranho mas funciona.

console.log(num1); // Retorna o valor 1
console.log(Number.isInteger(num1));




/*
console.log(num1.toString() + num2);  //converte o num1 para string, concatenando-o somente na saída.
console.log(typeof num1);
console.log(num1.toString(2)); // mostra o número binário de num1
console.log(num2.toFixed(2)); // Fixa duas casas decimais
console.log(Number.isInteger(num1)); // Retorna se a variável é um int
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Retorna se a conta é um NaN
*/