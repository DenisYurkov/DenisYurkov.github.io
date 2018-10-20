function validateForm () {
  var element = document.forms["myForm"]["fname"].value;
  var tel = document.forms["myForm"]["ftel"].value;
  if (element == "") {
    alert ("Имя должно быть заполнено");
    return false;
  } else if (tel == "") {
    alert ("Укажите ваш телефон");
    return false;
  }
}

function changeColor (newColor) {
  var element = document.getElementById("text");
  element.style.color = newColor;
}

// Объекты в JavaScript
function Fruit (color, shape) {
  this.color = color;
  this.shape = shape;
}

var melon = new Fruit ('yellow', 'round');
var apple = new Fruit ('red', 'round');

var apple = new Object ();
apple.color = 'green';
apple.shape = 'round';

melon.describe = function () {
  return 'A melon is ' + this.color;
}

console.log (melon.describe ());

// Создание объектов
var person = {
  firstName: 'Brad',
  age: 45,
  children: ['Liza', 'Perya'],
  adress: {
    street: '555 Some st',
    city: 'Boston',
    state: 'MA'
  },
  NameAge: function () {
    return this.firstName + ", age is - " + this.age;
  }
}

console.log (person.NameAge ());

// Функции
function summ (a, b) {
  return a + b;
}

document.write (summ (23, 34));

// Операторы условий
var num_1 = 223;
var num_2 = 223;
if (num_1 == num_2) {
  console.log (num_1 + " > " + num_2);
} else if (num_1 == num_2) {
  console.log (num_1 + " = " + num_2);
} else {
  console.log (num_1 + " < " + num_2);
}

var bool = false;
if ((!bool || num_1 != 223) || num_2 != 223) {
  console.log (bool + " is false");
}

var res = 5;
switch (res) {
  case 1:
      alert ("Res is 1");
    break;
  case 2:
      alert ("Res is 2");
    break;
  case 3:
      alert ("Res is 3");
    break;
  default:
    alert ("Res is unknown");
}

// Циклы
var i = 20;
do {
  console.log (i);
} while (i < 10);

var i = 200;
while (i >= 10) {
  console.log(i);
  i /= 2;
}

var colors = new Array ("Red", "Blue", "Green");
for (var i = 0; i < colors.length; i++)
  console.log(colors [i]);

// Массивы
var colors = new Array ("Red", "Blue", "Green");
colors.push ("Grey");

// Математические операции
var firstNum = 12;
var secondNum = 24;
firstNum--;
document.write (Math.abs (-222) + "<br>");
document.write ("Результат: ", firstNum % secondNum);

// Работа с переменными
var num = 1.45;
var Num = "String";
var bool = true;
console.log (bool);

var name = prompt ("Как вас зовут?");
console.log ("Ваше имя " + name);