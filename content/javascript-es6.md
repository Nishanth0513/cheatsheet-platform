---
title: "JavaScript ES6 Cheatsheet"
description: "Quick reference for ES6 features and syntax"
category: "Programming Languages"
tags: ["javascript", "es6", "frontend"]
version: "ES6"
---

## Arrow Functions

### Basic Syntax

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

### Features

- Shorter syntax
- Implicit return for single expressions
- Does not bind its own `this` value
- Cannot be used as constructors

## Template Literals

```javascript
const name = 'World';

// Traditional concatenation
console.log('Hello ' + name + '!');

// Template literal
console.log(`Hello ${name}!`);
```

### Features

- String interpolation with `${expression}`
- Multi-line strings without escape characters
- Tagged templates for custom string processing

## Destructuring

### Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];

// Traditional assignment
const first = numbers[0];
const second = numbers[1];

// Destructuring assignment
const [first, second, ...rest] = numbers;
```

### Object Destructuring

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Traditional assignment
const name = person.name;
const age = person.age;

// Destructuring assignment
const { name, age, city = 'Unknown' } = person;
```

## Spread and Rest Operators

### Spread Operator

```javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest Operator

```javascript
// Rest in arrays
const [first, ...rest] = [1, 2, 3, 4, 5]; // first: 1, rest: [2, 3, 4, 5]

// Rest in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

## Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, my name is ${this.name}`;
  }
  
  static create(name, age) {
    return new Person(name, age);
  }
}

// Inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
  
  greet() {
    return `${super.greet()} and I am a ${this.role}`;
  }
}
```

## Promises

```javascript
// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};

// Using promises
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Promise.all
Promise.all([promise1, promise2])
  .then(([result1, result2]) => console.log(result1, result2))
  .catch(error => console.error(error));
```

## Modules

### Exporting

```javascript
// Named exports
export const PI = 3.14159;
export function square(x) {
  return x * x;
}

// Default export
export default class Calculator {
  // Class implementation
}
```

### Importing

```javascript
// Named imports
import { PI, square } from './math';

// Default import
import Calculator from './calculator';

// Rename imports
import { PI as pi, square } from './math';

// Import all
import * as math from './math';
```

## Let and Const

```javascript
// Block-scoped variables
let x = 10;
const y = 20;

// let can be reassigned
x = 30; // Valid

// const cannot be reassigned
y = 40; // Error

// But objects and arrays declared with const can be modified
const obj = { a: 1 };
obj.a = 2; // Valid
obj.b = 3; // Valid
```

## Default Parameters

```javascript
// Traditional way
function greet(name) {
  name = name || 'Guest';
  return `Hello, ${name}!`;
}

// ES6 default parameters
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
```

## Map and Set

### Map

```javascript
const userRoles = new Map();

// Set entries
userRoles.set('john', 'admin');
userRoles.set('jane', 'editor');

// Get entries
userRoles.get('john'); // 'admin'

// Check existence
userRoles.has('john'); // true

// Delete entry
userRoles.delete('john');

// Size
userRoles.size; // 1
```

### Set

```javascript
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4]);

// Add values
uniqueNumbers.add(5);

// Check existence
uniqueNumbers.has(3); // true

// Delete value
uniqueNumbers.delete(3);

// Size
uniqueNumbers.size; // 4
```