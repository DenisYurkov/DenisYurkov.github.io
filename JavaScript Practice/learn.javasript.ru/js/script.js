//Создаль похожую систему паролей как в Вк
var userName = prompt('Введите ваша имя', '');
if (userName == 'Denis') {
	var pass = prompt('Пароль');
	if (pass == 'Чёрный Властелин') {
		alert('Добро пожаловать!');
	}else if (pass == null){
		alert('Вход отменён');
	}else{
		alert('Пароль неверен');
	}
}else if(userName == null){
	alert('Вход отменён');
}else{
	alert('Я вас не знаю');
}
//Фишка на js
/*var myhappyBirtday = prompt('Когда мой день рождения ?' , '');
if (myhappyBirtday =='3 августа'){
	alert('Молодец ты красавчик');
}else if(myhappyBirtday == null){
	alert('Ясно всё с тобой вышел значит точно не знаешь');
}
*/
//Тест
/*it("любое число в степени 0 равно 1", function() {
  assert.equal(pow(123, 0), 1);
});
describe("любое число, кроме нуля, в степени 0 равно 1", function() {

  function makeTest(x) {
    it("при возведении " + x + " в степень 0 результат: 1", function() {
      assert.equal(pow(x, 0), 1);
    });
  }

  for (var x = -5; x <= 5; x += 2) {
    makeTest(x);
  }

});
*/
//Объекты как ассоциативные массивы
/*var user = {};
user.name = 'Вася';
user.surname = 'Петров';
user.name = 'Сергей';
delete user.age;
alert(user.name);
*/
//Объекты: перебор свойств
/*function isEmpty(obj) {
	for(var key in obj ){
		return false;
	}
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false*/

/*"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var sum = 0;
for  (var name in salaries ){
	sum += salaries[name];
}
alert(sum);*/

/*"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};


var max = 0;
var maxName = "";

for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );*/

/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );*/
/*
var sum = new Function('a, b', ' return a + b; ');

var a = 1, b = 2;

alert( sum(a, b) ); // 3
*/
/*function sum (a){
	return function(b){
		return a + b;
	};

}
alert( sum(1)(2) );
alert( sum(5)(-1) );*/
/*alert( typeof 123 ); // "number"
alert( typeof "строка" ); // "string"
alert( typeof new Date() ); // "object"
alert( typeof [] ); // "object"*/ 
/*VK.callMethod('showAllowMessagesFromCommunityBox', group_id);*/
console.log('https://github.com/DenisYurkov/DenisYurkov.github.io');