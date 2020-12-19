// Starter text
swal("Choose a level to start playing!");

// Получить случайное число от 0 до size-1
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

// Вычислить расстояние от клика (event) до клика (target)
function getDistance(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffY) + (diffX * diffY));
}

// Получить для расстояния строку подсказки 
function getDistanceHint(distance) {
    if (distance < 100) {
        return "Almost";
    } else if (distance < 114) {
        return "Very hot!";  
    } else if (distance < 133) {
        return "Hot!";
    } else if (distance < 160) {
        return "Warm!";
    } else if (distance < 200) {
        return "Cold";
    } else if (distance < 266) {
        return "Very cold!";
    } else if (distance < 400) {
        return "Very-very cold!";
    } else {
        return "You're freezing!"
    }
}

// Создаём переменные 
var width = 800;
var height = 800;
var click = 0;
var clickLimit = 20;

// Случайная позиция клада 
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    click++;

    // Ограничение по попытком
    if (click > clickLimit) {
        swal("We ran out of attempts, updated the pages to start again!");
        return;
    }
    // Получаем расстояние от места клика до клада 
    var distance = getDistance(event, target);

    // Преобразуем расстояние в посказку
    var distanceHint = getDistanceHint(distance);

    // Записаваем в элемент #distance новую подсказку 
    $("#distance").text(distanceHint);

    // Записаваем в элемент в #click-remaining столько осталось попыток
    $("#click-remaining").text("Left " + (clickLimit - click) + " attempts!");


    // Если клик был достаточно близко вывести, поздравление с победой
    if (distance < 88) {
        swal("The treasure is found! Clicks are made: " + click);
    }
});