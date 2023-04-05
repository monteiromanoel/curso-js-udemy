//Para utilizar aspas em strings, há várias formas:
let umaString = 'Um "texto"'; //Assim irá utilizar as aspas de dentro da string normalmente.
let umaString2 = "Um 'texto'"; //Assim irá utilizar as aspas de dentro da string normalmente.
let umaString3 = 'Um \"texto\"'; //Assim irá utilizar as aspas de dentro da string normalmente.

console.log(umaString.charAt(5));
console.log(umaString[3]);
console.log(umaString.concat(' em um lindo dia')); //concatenação
console.log(umaString + ' em um lindo dia'); //concatenação
console.log(`${umaString} em um lindo dia`); //concatenação

console.log(umaString.lastIndexOf('m')); //Procura no índice da String, começando do final para o começo.
console.log(umaString2.indexOf("U", 2)); //Procura no índice da String começando à partir do índice 2

console.log(umaString3.match(/[a-z]/g)); //Procura na string todas as letras minúsculas. Isso é uma expressão regular.
console.log(umaString.search(/x/)); // Procura a letra da expressão em específico na string.
console.log(umaString.replace('Um', 'Outra')); //Substitui a palavra 'Um' por 'Outra'.