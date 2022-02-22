// // Factory functions
// const personFactory = (name, age) => {
//   const sayHello = () => console.log('hello!');
//   return {name, age, sayHello};
// }

// const jeff = personFactory('jeff', 27);

// console.log(jeff.name);

// jeff.sayHello();

// // Object shorthand hacking
// const name = "Maynard";
// const color = "red";
// const number = 34;
// const food = "rice";

// // logging all of these variables might be a useful thing to do,
// // but doing it like this can be somewhat confusing.
// console.log(name, color, number, food); // Maynard red 34 rice

// // if you simply turn them into an object with brackets,
// // the output is much easier to decipher:
// console.log({name, color, number, food});
//  // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }

 // scope = variable access
 // context == this

//  var a = 1;

//  function foo() {
//   var a = 2;

//    a = 2;
//    console.log(a);
//    console.log(window.a);
//  }

//  foo();

//  console.log(a);

//  const FactoryFunction = string => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`----${capitalizeString()}----`);
//   return { printString };
// };

// const taco = FactoryFunction('taco');

// // printString(); // ERROR!!
// // capitalizeString(); // ERROR!!
// // taco.capitalizeString(); // ERROR!!
// taco.printString(); // this prints "----TACO----"

// const counterCreator = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// const counter = counterCreator();

// counter(); // 0
// counter(); // 1
// counter(); // 2
// counter(); // 3

// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName  = () => name;
//   const die = () => {
//     // uh oh
//   };
//   const damage = x => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = enemy => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   return {attack, damage, getLevel, getName};
// };

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);

// Inheritance

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`);
//   return {sayName};
// }

// const Nerd = (name) => {
//   // simply create a person and pull out the sayName function with destructuring assignment syntax!
//   const prototype = Person(name);
//   const doSomethingNerdy = () => console.log('nerd stuff');
//   return Object.assign({}, prototype, {doSomethingNerdy});
// }

// const jeff = Nerd('jeff');

// jeff.sayName(); //my name is jeff
// jeff.doSomethingNerdy(); // nerd stuff

// The Module Pattern
// IIFE (Immediately Invoked Function Expression)

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476
