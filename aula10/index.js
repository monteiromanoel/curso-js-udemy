/*Operadores Aritméticos 
* + -> Adição ou concatenação
* - -> Subtração  
* * -> Multiplicação
* / -> Divisão
* ** -> Potenciação, número elevado a outro número
* % -> Resto da divisão
* ++ -> Incremento - Pré ++variável / Pós variável++
* -- -> Decremento - Pré ++variável / Pós variável++
* += -= *= ... -> Operadores de atribuição
*/

const num1 = 2;
const num2 = 18;
const num3 = "5";
let num4 = 21;

console.log('Soma ->', num1 + num2);
console.log('Concatenação ->', num1 + num3);
console.log('Subtração ->', num1 - num2);
console.log('Multiplicação ->', num1 * num2);
console.log('Divisão ->', num1 / num2);
console.log('Potenciação ->', num1 ** num2);
console.log('Resto da Divisão ->', num1 % num2);
console.log('Incremento ->', ++num4); //Uma boa prática é fazer essa operação antes de se mostrar o dado.
console.log('Decremento ->', --num4) //Uma boa prática é fazer essa operação antes de se mostrar o dado.

let contador = 1;
contador += 2; //É o mesmo que contador +  contador + 2;
contador += 2;
contador += 2;
console.log(contador)