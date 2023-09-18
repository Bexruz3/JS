var imya = prompt('Ввидите  своё имя')
var age = prompt('Ввидите  сколько вам лет')

console.log(imya);
console.log(age);

var a = +prompt('Решите пример 10 + 6 = ?')
console.log(  `ваш отв ${a} правилный отв ${ 10+6 }`);
var a = +prompt('Решите пример 10 - 6 = ?')
console.log(  `ваш отв ${a} правилный отв ${ 10-6 }`);
var a = +prompt('Решите пример 10 * 6 = ?')
console.log(  `ваш отв ${a} правилный отв ${ 10*6 }`);
var a = +prompt('Решите пример 10 / 6 = ?')
console.log(  `ваш отв ${a} правилный отв ${ 10/6 }`);
var a = +prompt('Решите пример 10 % 6 = ?')
console.log(  `ваш отв ${a} правилный отв ${ 10%6 }`);

var F12 = prompt('НАЖМИТЕ КЛАВИШУ F12 И ЗАЙДИТЕ В CONSOLE')
alert(F12)

//ЗАДАНИЕ 2

var x = +prompt('Ввидите первое число')
var y = +prompt('Ввидите первое число')
var z = +prompt('Ввидите первое число')
 var res = (x+y+z ) / 3 

 console.log('cреднее фрифметическое '  + res);