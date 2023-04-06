//Para utilizar aspas em strings, há várias formas:
let umaString = 'Um "texto"'; //Assim irá utilizar as aspas de dentro da string normalmente.
let umaString2 = "Um 'texto'"; //Assim irá utilizar as aspas de dentro da string normalmente.
let umaString3 = 'Um \"texto\"'; //Assim irá utilizar as aspas de dentro da string normalmente.
let umaString4 = "O rato roeu a roupa do rei de Roma."

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
console.log(umaString4.replace(/r/g, '#')); //Substitui todas as letras R por #, utilizando expressão regular

console.log(umaString4.length); //Retorna o tamanho em caracteres da String
console.log(umaString4.slice(-5, -1)); //Corta um intervalo da String, levando em consideração o índice da string. Também aceita valores negativos.

console.log(umaString4.split(' ')); //Divide as palavras da string em um array

console.log(umaString4.toUpperCase()); //Passa a string inteira para maiúscula
console.log(umaString4.toLowerCase()); //Passa a string inteira para minúscula
