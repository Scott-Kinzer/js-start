'use strict';

// To string

//1)

console.log(typeof String(null));

console.log(typeof String(4));

// 2)

console.log(typeof (5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

console.log(fontSize);

// TO Number

// 1)

console.log(typeof Number('4'));

// 2)

console.log(typeof +'5');

// 3)

console.log(typeof parseInt('15px', 10));

// let ans = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, Nan;

const switcher = 1;

if (switcher) {
  console.log('working');
}

// 2)

console.log(typeof Boolean('4'));

// 3)

console.log(!'444');
