// Задание 1: Найти произведение всех четных чисел
function calculateProduct() {

    const input = document.getElementById('inputNumbers').value;
    const numbers = input.split(' ').map(Number);
    let product = 1;
    
    if (numbers.length !== 10) {
        document.getElementById('result').textContent = "Введите ровно 10 чисел!";
        return;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            document.getElementById('result').textContent = "Пожалуйста, введите только числа!";
            return;
        }
    }

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            product *= numbers[i];
        }
    }

    if (product !== 1) {
        document.getElementById('result').textContent = `Произведение четных чисел: ${product}`;
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
