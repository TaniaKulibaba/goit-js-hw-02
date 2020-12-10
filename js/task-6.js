let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }

    numbers.push(Number(input));
}

for (const number of numbers) {
    total += number;
}
alert(`Общая сумма чисел равна ${total}`);