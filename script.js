// Задание 1: Найти произведение всех четных чисел
function task1() {
    const input = document.getElementById('numbers1').value.trim();
    const numbers = input.split(' ').map(Number);

    if (numbers.length !== 10 || numbers.some(isNaN)) {
        document.getElementById('output1').textContent = "Введите ровно 10 чисел через пробел.";
        return;
    }

    const product = numbers.reduce((acc, num) => (num % 2 === 0 ? acc * num : acc), 1);
    const result = product !== 1 ? `Произведение четных чисел: ${product}` : "Четных чисел нет.";

    document.getElementById('output1').textContent = result;
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
