import { add as plus, sub, multiply, divide } from './math';
import getMessage from './strings';
import * as utils from './utils';
import * as user from './users';
import kittenImage from '../img/kitten.avif';

// console.log(plus(10, 7));
// console.log(sub(35, 7));
// console.log(multiply(3, 7));
// console.log(divide(30, 3));

// console.log(getMessage());

// console.log(utils.upper('petro'));

// console.log(utils.lower('PEtRO'));

// console.log(utils.capitalize(' pEtrO'));
// console.log(utils.capitalize(''));

// console.log(user.name, user.age, user.sayHello());

const imgElement = (document.querySelector('#app').innerHTML =
  `<img src="${kittenImage}" width="400"/>`);

console.log(kittenImage);
