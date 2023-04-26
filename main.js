// switch(x) {
//     case 'Значение 1': // аналог if(x === Значение 1)
//         ..... 
//         break
//     case 'Значение 2' // аналог if(x === Значение 2)
//         ..... 
//         break
//     default:
//         ..... 
//         break;
// }

// let a = 5 + 0;
// switch (a) {
//     case 5:
//         alert('Проверка 1')
//         break;
//     case 10:
//         alert('Проверка 2')
//         break;
//     case 15:
//         alert('Проверка 3')
//         break;
//     default:
//         alert('Все проверки пройдены')
// }

// let a = '1';
// let b = '0';
// switch(+a) {
//     case b + 1: // +a = b + 1 (это всё числа)
//     alert('Выполнится')
//     break;
//     default:
//     alert ('Не выполнится')
// }

// let a = 5;
// switch(a){
//     case 12:
//     alert('Правильно')
//     break;

//     case 5: // группировка case
//     case 10:
//         alert('Не правильно')
//         alert('Абсолютно неправильно')
//         break;
//     default:
//         alert('Результат отсутствует')
// }

// let arg =prompt('Введите число')

// switch(arg){
//     case '0':
//     case '1':
//         alert ('Один или ноль')
//         break;
//     case '2':
//         alert('Два');
//         break;
//     case 3:
//         alert('Этот результат никогда не выполнится')
//         break;
//     default:
//         alert('Значение неизвестно')

// }

// let a = 1
// let b = 2

// console.log(a??b);


// result = (a !==null && a !==indexed) ? a : b; // данные строки одинаковы, просто так короче

// let a = 1
// let b = 2 

// console.log(a??b); // данные строки одинаковы, просто так короче


// let user = 'Иван';
// alert (user ?? 'Аноним') // отдельный доступ для авторизованного юзера и нет

// let firstname = null;
// let lastname = null;
// let nickname = 'CptMarkizi'

// // Первое значение, которое определенно 
// // alert(firstname??lastname??nickname??'Аноним')

// alert(firstname || lastname || nickname || 'Аноним') // Это оператор нулевого слияния, они практически однотипны с ?? (или), но оператор ИЛИ возвращает первое истинное значение


// ДОМАШНЕЕ ЗАДАНИЕ:

// let number = +prompt('Введите число от 0 до 5')

// if (number === 0){
//     alert('Вы ввели число 0')
// }
// if (number === 1){
//     alert('Вы ввели число 1')
// }
// if (number === 2 || number ===3){
//     alert('Вы ввели 2 или 3')
// }
// else{
//     alert('Вы ввели неккоректное значение')
// }

// ПЕРЕПИСАННОЕ ПОД SWITCH

// let number = +prompt('Введите число от 0 до 5');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//         alert('Вы ввели 2 или 3')
//     case 3:
//         alert('Вы ввели 2 или 3')
//         break;
//     default:
//         alert('Вы ввели неккоректное значение')
// }



// let Test1 = prompt('Переменная prompt');
// let Test2 = 'Переменная по умолчанию';

// switch(Test1){
//     case 'Test1':
//         alert ('Верно')
//         break;
//     case 'Test2':
//         alert('Не верно');
//         break;
//     default:
//         alert('Не сработало')

// }


// let number = +prompt('Введите число от 1 до 12');
// switch (number) {
//     case 1:
//         alert('Зима')
//         break;
//     case 2:
//         alert('Зима')
//         break;
//     case 3:
//         alert('Зима')
//         break;
//     case 4:
//         alert('Весна')
//         break;
//     case 5:
//         alert('Весна')
//     case 6:
//         alert('Весна')
//         break;
//     case 7:
//         alert('Лето')
//         break;
//     case 8:
//         alert('Лето')
//         break;
//     case 9:
//         alert('Лето')
//         break;
//     case 10:
//         alert('Осень')
//         break;
//     case 11:
//         alert('Осень')
//     case 12:
//         alert('Осень')
//         break;
//     default:
//         alert('Вы ввели неккоректное значение')
// }


// let Test1 = '1';
// let Test2 = 'null';
// let Test3 = '3';

// alert(Test1 ?? "значение не определено");
// alert(Test2 ?? "значение не определено");
// alert(Test3 ?? "значение не определено");

