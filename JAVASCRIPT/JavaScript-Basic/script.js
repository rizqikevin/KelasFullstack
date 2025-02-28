// =========================
// Mastering JavaScript: Fundamental to Advanced
// =========================

// =========================
// 1. Variables & Data Types
// =========================
let name = "John"; // String
const age = 30; // Number
let isStudent = false; // Boolean
let hobbies = ["Reading", "Coding", "Gaming"]; // Array
let user = { name: "Alice", age: 25 }; // Object

// =========================
// 2. Functions: Declaration, Expression & Arrow Function
// =========================
function greet(name) {
  return `Hello, ${name}!`;
}

const multiply = function (a, b) {
  return a * b;
};

const add = (a, b) => a + b;

// =========================
// 3. Higher-Order Functions & Callbacks
// =========================
function processArray(arr, callback) {
  return arr.map(callback);
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = processArray(numbers, (num) => num ** 2);

// =========================
// 4. Asynchronous JavaScript: Callbacks, Promises & Async/Await
// =========================
function delayedMessage(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay);
  });
}

async function showMessages() {
  await delayedMessage("Hello", 1000);
  await delayedMessage("World", 2000);
}
showMessages();

// =========================
// 5. Array Methods: map, filter, reduce, forEach, find, sort
// =========================
const doubled = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
numbers.forEach((num) => console.log(num));
const firstEven = numbers.find((num) => num % 2 === 0);
const sortedNumbers = numbers.sort((a, b) => a - b);

// =========================
// 6. Object-Oriented Programming: Class & Prototype
// =========================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, my name is ${this.name}`;
  }
}

const person1 = new Person("Alice", 25);
console.log(person1.greet());

// =========================
// 7. ES6 Features: Spread, Rest, Destructuring, Template Literals
// =========================
const newNumbers = [...numbers, 6, 7, 8];
const [first, second, ...rest] = newNumbers;
const { name: userName, age: userAge } = user;
const greetingMessage = `Hello, ${userName}, age ${userAge}!`;

// =========================
// 8. Error Handling with Try-Catch & Finally
// =========================
try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Math Error: Division by zero");
  }
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Execution completed.");
}

// =========================
// 9. LocalStorage & SessionStorage
// =========================
localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username"));

// =========================
// 10. Generators & Iterators
// =========================
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// =========================
// 11. Proxy & Reflect
// =========================
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : "Property not found";
  },
};
const proxyUser = new Proxy(user, handler);
console.log(proxyUser.name);
console.log(proxyUser.email);

// =========================
// 12. Bitwise Operations
// =========================
let bitwiseAnd = 5 & 1; // 1
let bitwiseOr = 5 | 1; // 5
let bitwiseXor = 5 ^ 1; // 4
console.log(bitwiseAnd, bitwiseOr, bitwiseXor);

// =========================
// 13. Regular Expressions (Regex)
// =========================
let regex = /hello/i;
console.log(regex.test("Hello world"));
console.log("Hello world".match(regex));

// =========================
// 14. WebSockets
// =========================
const socket = new WebSocket("wss://example.com/socket");
socket.onopen = () => console.log("Connected to WebSocket");
socket.onmessage = (message) => console.log("Received:", message.data);
socket.onclose = () => console.log("WebSocket closed");

// =========================
// This structured approach helps learners grasp JavaScript quickly!
