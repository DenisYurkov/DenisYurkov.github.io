// Help Text
swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\n Удачи!", "info");
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
    if (distance < 25) {
        return "Обожжешься!";
    } else if (distance < 35) {
        return "Очень горячо!";  
    } else if (distance < 45) {
        return "Горячо";
    } else if (distance < 167) {
        return "Тепло";
    } else if (distance < 250) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 520) {
        return "Очень-очень холодно";
    } else {
        return "Замёрзнешь!"
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
        swal("Закончились попытки, обновите страниц чтобы начать заново!");
        return;
    }
    // Получаем расстояние от места клика до клада 
    var distance = getDistance(event, target);

    // Преобразуем расстояние в посказку
    var distanceHint = getDistanceHint(distance);

    // Записаваем в элемент #distance новую подсказку 
    $("#distance").text(distanceHint);

    // Записаваем в элемент в #click-remaining столько осталось попыток
    $("#click-remaining").text("Осталось " + (clickLimit - click) + " попыток!");


    // Если клик был достаточно близко вывести, поздравление с победой
    if (distance < 15) {
        swal("Клад найден! Сделано кликов: " + click);
    }
});