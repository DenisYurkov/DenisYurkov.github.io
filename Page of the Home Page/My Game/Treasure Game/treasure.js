// Starter text
swal("Выбирайте уровень чтобы начать играть!");
function level1() {
    // Help Text
    swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\nКогда закончили один уровень, переходите на другой. Перед тем как переходить на новый уровень обновите страницу!\n Удачи!", "info");
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
        if (distance < 45) {
            return "Обожжешься!";
        } else if (distance < 70) {
            return "Очень горячо!";  
        } else if (distance < 100) {
            return "Горячо";
        } else if (distance < 180) {
            return "Тепло";
        } else if (distance < 260) {
            return "Холодно";
        } else if (distance < 320) {
            return "Очень холодно";
        } else if (distance < 640) {
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
            swal("Закончились попытки");
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
        if (distance < 55) {
            swal("Клад найден! Сделано кликов: " + click);
        }
    });
    
}


function level2() {
    // Help Text
    swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\nКогда закончили один уровень, переходите на другой. Перед тем как переходить на новый уровень обновите страницу!\n Удачи!", "info");
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
        if (distance < 30) {
            return "Обожжешься!";
        } else if (distance < 40) {
            return "Очень горячо!";  
        } else if (distance < 60) {
            return "Горячо";
        } else if (distance < 120) {
            return "Тепло";
        } else if (distance < 220) {
            return "Холодно";
        } else if (distance < 320) {
            return "Очень холодно";
        } else if (distance < 540) {
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
            swal("Закончились попытки");
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
        if (distance < 35) {
            swal("Клад найден! Сделано кликов: " + click);
        }
    });
}
function level3 () {
    // Help Text
    swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\nКогда закончили один уровень, переходите на другой. Перед тем как переходить на новый уровень обновите страницу!\n Удачи!", "info");
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
            swal("Закончились попытки");
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
}

function level4 () {
    // Help Text
    swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\nКогда закончили один уровень, переходите на другой. Перед тем как переходить на новый уровень обновите страницу!\n Удачи!", "info");
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
        if (distance < 15) {
            return "Обожжешься!";
        } else if (distance < 25) {
            return "Очень горячо!";  
        } else if (distance < 35) {
            return "Горячо";
        } else if (distance < 127) {
            return "Тепло";
        } else if (distance < 200) {
            return "Холодно";
        } else if (distance < 300) {
            return "Очень холодно";
        } else if (distance < 420) {
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
            swal("Закончились попытки");
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
        if (distance < 11) {
            swal("Клад найден! Сделано кликов: " + click);
        }
    });
}

function level5 () {
    // Help Text
    swal("Инструкция к игре", "Смысл игры найти клад!\nКликайте на картинку!\nУ вас 20 попыток!\n Внизу под картинкой будут написаны подсказки по типу горячо или холодно и сколько попыток осталось!\nКогда закончили один уровень, переходите на другой. Перед тем как переходить на новый уровень обновите страницу!\n Удачи!", "info");
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
        if (distance < 11) {
            return "Обожжешься!";
        } else if (distance < 20) {
            return "Очень горячо!";  
        } else if (distance < 25) {
            return "Горячо";
        } else if (distance < 45) {
            return "Тепло";
        } else if (distance < 150) {
            return "Холодно";
        } else if (distance < 200) {
            return "Очень холодно";
        } else if (distance < 320) {
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
            swal("Закончились попытки");
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
        if (distance < 8) {
            swal("Клад найден! Сделано кликов: " + click);
        }
    });
}