// Help Text
alert("Игра Висельница!\n У вас есть 11 попыток!\n Вводить руские буквы!");
// Создание массива со словами 
var words = [
    "дамба",
    "программирование",
    "манго",
    "сша",
    "польша",
    "варшава",
    "буржуй",
    "бодряк",
    "гигант",
    "боевое",
    "бегун",
    "высоки",
    "банан",
    "дурь",
    "анекдот",
    "блондин",
    "авиапочта"
];

// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];

// Создаём итоговый массив 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainigLetters = word.length;
var guesses = 11;
// Игровой цикл
while (remainigLetters > 0 && guesses > 0)  {
    // Показывает состояние игры 
    alert(answerArray.join(" "));

    // Запрашиваем вариант ответа
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        alert("Ты не угадал! Было загадано слово " + word);
       // Выходим из игрового цикла 
       break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.")
    } else {
        guesses--;
        guess = guess.toLowerCase();
        // Обновляем состояние игры 
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainigLetters--;
    
            }
        }
    }
// Конец игрового цикла 
}

// Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
if (guess === null) {
    alert("Попробуй ещё раз!");
} else if (guesses > 0 ) {
    alert("Отлично! Было загадано слово " + word);
} else {
    alert("Ты не угадал! Было загадано слово " + word);
}
