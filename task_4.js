// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
// В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
// Перевіряє чи зможе користувач оплатити замовлення:
// якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
// в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'.

const credits = 23580;
const pricePerDroid = 3000;
let message;

let quantity = prompt("Введіть кількість дроїдів");

const totalPrice = quantity * pricePerDroid;

if (totalPrice > credits) {
  message = "Недостатньо коштів на рахунку!";
}

if (totalPrice < credits) {
  message = `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`;
}

if (quantity === null) {
  message = " ";
  console.log("Скасовано користувачем!");
}

alert(message);
