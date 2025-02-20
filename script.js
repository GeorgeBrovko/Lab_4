// Задание 1: Найти произведение всех четных чисел
function calculateProduct() {
    // Получаем введенные данные и преобразуем их в массив чисел
    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(' ').map(Number);

    // Проверка на количество чисел
    if (numbers.length !== 10) {
        document.getElementById('result').textContent = "Введите ровно 10 чисел!";
        return;
    }

    let acc = 1; // Инициализация произведения
    let hasEven = false; // Флаг для проверки наличия четных чисел

    for (const num of numbers) {
        if (num % 2 === 0) { // Проверка на четность
            acc *= num;     // Умножаем четные числа
            hasEven = true; // Устанавливаем флаг, если есть хотя бы одно четное число
        }
    }

    // Выводим результат в зависимости от наличия четных чисел
    if (hasEven) {
        document.getElementById('result').textContent = `Произведение четных чисел: ${acc}`;
    } else {
        document.getElementById('result').textContent = "Четных чисел нет.";
    }
}


// Задание 2: Вывести ряд натуральных чисел
function task2() {
    const min = parseInt(document.getElementById('min2').value);
    const max = parseInt(document.getElementById('max2').value);
    const step = parseInt(document.getElementById('step2').value);

    if (isNaN(min) || isNaN(max) || isNaN(step) || step <= 0) {
        document.getElementById('output2').textContent = "Введите корректные числа для минимума, максимума и положительного шага.";
        return;
    }

    if (min > max) {
        document.getElementById('output2').textContent = "Минимум должен быть меньше или равен максимуму.";
        return;
    }

    const numbers = [];
    for (let i = min; i <= max; i += step) {
        numbers.push(i);
    }

    document.getElementById('output2').textContent = `Ряд чисел: ${numbers.join(' ')}`;
}
