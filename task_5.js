// // // Користувач може оформити доставку товару до себе в країну, вказавши її при відвідуванні сторінки в prompt. Врахуй, користувач може ввести ім'я країни не тільки буквами нижнього регістра, а наприклад 'кИтАЙ'.

// // // Напиши скрипт який виводить повідомлення про вартість доставки в зазначену країну. Обов'язково використовуй switch. Формат повідомлення: 'Доставка в [країна] буде коштувати [ціна] кредитів'.

// // // Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в message = повідомлення 'У вашій країні доставка недоступна'.

// // // Нижче аведено список країн і вартість доставки.

// // // Китай - 100 кредитів
// // // Чилі - 250 кредитів
// // // Австралія - 170 кредитів
// // // Індія - 80 кредитів
// // // Ямайка - 120 кредитів

// let cost;
// let country = prompt("Введіть назву країни: ");

// if (typeof country === "string" && country.trim().length > 0) {
//   country = country[0].toUpperCase().concat(country.slice(1));
// }

// if (country === null || country === "") {
//   alert(`Відмінено користувачем`);
// } else
//   switch (country) {
//     case "Китай":
//       cost = 100;
//       alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);
//       break;

//     case "Чилі":
//       cost = 250;
//       alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);
//       break;

//     case "Австралія":
//       cost = 170;
//       alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);
//       break;

//     case "Індія":
//       cost = 80;
//       alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);
//       break;

//     case "Ямайка":
//       cost = 120;
//       alert(`Доставка в ${country} буде коштувати ${cost} кредитів`);
//       break;

//     default:
//       alert("У вашій країні доставка недоступна");
//   }

let cost;
let country = prompt("Введіть назву країни: ");
let message = "Відмінено користувачем";

if (typeof country === "string" && country.trim().length > 0) {
  const isData = country.trim().length > 0;

  if (isData) {
    const preStr = country[0].toUpperCase();
    const postStr = country.slice(1).toLowerCase();

    country = preStr.concat(postStr);
  }
}

if (country !== null) {
  switch (country) {
    case "Китай":
      cost = 100;
      message = `Доставка в ${country} буде коштувати ${cost} кредитів`;
      break;

    case "Чилі":
      cost = 250;
      message = `Доставка в ${country} буде коштувати ${cost} кредитів`;
      break;

    case "Австралія":
      cost = 170;
      message = `Доставка в ${country} буде коштувати ${cost} кредитів`;
      break;

    case "Індія":
      cost = 80;
      message = `Доставка в ${country} буде коштувати ${cost} кредитів`;
      break;

    case "Ямайка":
      cost = 120;
      message = `Доставка в ${country} буде коштувати ${cost} кредитів`;
      break;

    default:
      message = "У вашій країні доставка недоступна";
  }
}

alert(message);
