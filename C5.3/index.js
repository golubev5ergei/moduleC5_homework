// const inputValue = prompt('Введите число')

// const value = +inputValue;

// if (typeof value == "number" && !isNaN(value)) {
//     if (value == 0) {
//         console.log('ноль')
//     } else if (value % 2 == 0) {
//         console.log('чётное')
//     } else {
//         console.log('нечётное')
//     }
// } else {
//     console.log('Упс, кажется, вы ошиблись')
// }

// function arraySort() {
// const arr = [0, null, NaN, 0, 1, 2, 4, "string"]
// console.log('количество элементов: ', arr.length)

// for (let i = 0; i < arr.length; i++) {
//     console.log(`элемент arr[${i}] = ${arr[i]}`)
//      }
// };
// arraySort();
// let map = new Map();
// map.set('key1', 'prop1');
// map.set('key2', 'prop2');

// const keys = map.keys()

// for (let key of keys) {
//   console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
// }

// function definePrime(num) {
//     let isPrime, result;
//     isPrime = true;

//     if (num > 1 && num <= 1000) {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//             }
//         }
//         result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
//     } else if (num > 1000) {
//         result = 'Данные неверны';
//     }
//     return result;
// }

// console.log(definePrime(54));

function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

logNumbers(5, 15);