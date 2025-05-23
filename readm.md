 what is javascript?
 <!-- javascript is high level, interpreted programming language that is used for web development, that can run on both server side and client side also. -->

 ----------------------------------------------------- QUESTION 0 ---------------------------------------------------------------

 Difference between Normal function and arrow function?
<!-- Normal function Has its own this context.
Arrow function Does not have its own this; it inherits this from the surrounding scope (lexical scope)

------------------------------Example -----------------------------

const obj = {
  value: 10,
  normal: function () {
    console.log(this.value); // 10 (this refers to obj)
  },
  arrow: () => {
    console.log(this.value); // undefined (this refers to the outer scope, not obj)
  }
};

obj.normal();
obj.arrow();

------------------------------Example -----------------------------

Normal function: Has its own arguments object.
Arrow function: Does not have arguments. You can use rest parameters instead.

------------------------------Example -----------------------------

function normalFn() {
  console.log(arguments); // works
}

const arrowFn = () => {
  console.log(arguments); // ReferenceError
};

------------------------------Example -----------------------------

Normal functions can be used as constructors with new.
Arrow functions cannot be used as constructors.

------------------------------Example -----------------------------

function Person(name) {
  this.name = name;
}
const p = new Person("Shafi"); // works

const PersonArrow = (name) => {
  this.name = name;
};
// const p2 = new PersonArrow("Shafi"); // Error: PersonArrow is not a constructor

------------------------------Example -----------------------------


Normal functions are hoisted (you can use them before they’re defined).
Arrow functions assigned to variables are not hoisted.

------------------------------Example -----------------------------

sayHello(); // works
function sayHello() {
  console.log("Hello");
}

// greet(); // Error: Cannot access 'greet' before initialization
const greet = () => {
  console.log("Hi");
};

------------------------------Example ----------------------------- -->

----------------------------------------------------- QUESTION 1 ---------------------------------------------------------------


is useref is mutable or immutable. if mutable then how give example
<!--  useRef is mutable — meaning you can change the value of a ref without causing a re-render.

import React, { useRef } from "react";

function MutableRefExample() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log("Count (ref):", countRef.current); // mutable value changes
  };

  return (
    <div>
      <p>Click the button and check the console.</p>
      <button onClick={handleClick}>Increase Count (via ref)</button>
    </div>
  );
}
 -->

----------------------------------------------------- QUESTION 2 ---------------------------------------------------------------

Difference between map and foreach
<!-- map(): Returns a new array with transformed values.
forEach(): Doesn't return anything (returns undefined).

------------------------------Example -----------------------------

const numbers = [1, 2, 3];

const mapped = numbers.map(num => num * 2); 
console.log(mapped); // [2, 4, 6]

const forEachResult = numbers.forEach(num => num * 2); 
console.log(forEachResult); // undefined

------------------------------Example -----------------------------

Use map() when you want to transform data and get a new array.
Use forEach() when you want to do something with each item (e.g., logging, pushing into another array), without returning a new array.


map() is chainable (you can do .map().filter().reduce())
forEach() is not chainable.

------------------------------Example -----------------------------

const result = [1, 2, 3]
  .map(n => n * 2)
  .filter(n => n > 3);

console.log(result); // [4, 6]

You can’t do this with forEach.

------------------------------Example ----------------------------- -->
<!-- Mutability

Both don’t mutate the original array directly — but you can mutate external state inside them (though it’s best to avoid that in map()). -->


<----------------------------------------------------- QUESTION 3 --------------------------------------------------------------->

what is middleware in express js?

<!-- Middleware = a function that runs between the request and the response.

It’s perfect for:

Logging
Validating data
Authenticating users
Handling errors
Serving static files -->

<----------------------------------------------------- QUESTION 4 --------------------------------------------------------------->

<!-- console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Promise constructor");
  resolve("Resolved value");
});

console.log("middle");

promise.then((value) => {
  console.log("Promise resolved with:", value);
});

console.log("End"); -->


Start
Promise constructor --> gets executed Constructor is synchronous, so it runs immediately
middle
End
Promise resolved with: Resolved value -->  Then, resolve("Resolved value") is called — this queues the .then() callback as a microtask (doesn't run yet)


<!-- IMP: Promise constructor runs synchronously

.then() runs asynchronously (microtask queue) -->


<----------------------------------------------------- QUESTION 5 --------------------------------------------------------------->

<!-- let x = 10;

(function() {
  console.log(x);
  var x = 20;
})();

output :- undefined

let x = 10;

(function() {
    x = 20;
  console.log(x);
  var x;
})()

output :- 20 -->

<----------------------------------------------------- QUESTION 5 --------------------------------------------------------------->

<!-- 
Difference between undefined and null

Meaning: A variable has been declared but has not been assigned a value.
Type: undefined is a type itself.
Set by: JavaScript automatically.

Meaning: A variable is explicitly assigned to have "no value".
Type: object (this is a weird legacy behavior in JS).
Set by: You (the developer).
 -->

<----------------------------------------------------- QUESTION 6 --------------------------------------------------------------->

Difference between fullfilled and settled?

<!-- Means the promise has completed successfully.
The promise now has a resolved value.
This happens when resolve() is called.

Means the promise is no longer pending — it has either:
fulfilled ✅ (resolved successfully), or
rejected ❌ (failed with an error)
So, fulfilled is a type of settled, but not the only one. -->

<----------------------------------------------------- QUESTION 7 --------------------------------------------------------------->

Difference between Promise, callback and Async/Await

<!-- Promise
Represents the eventual result (or failure) of an asynchronous operation.
Has 3 states: pending, fulfilled, or rejected.
Created using new Promise(...).

Async
A keyword you use to declare a function that returns a promise.
Even if you return a normal value, it gets wrapped in a promise.

Await
Can only be used inside an async function.
Waits for a promise to settle (pause execution) and returns its result.
Makes async code look more like synchronous code (easier to read).

callback
A function passed as an argument to another function.
Used to handle asynchronous operations like reading a file, making an API call, etc.
Can lead to "callback hell" (nested and hard-to-read code).
No built-in error handling like Promises. -->

<----------------------------------------------------- QUESTION 7 --------------------------------------------------------------->

Explain Event delegation?
<!-- Event delegation allows you to handle events for multiple child elements at the parent level. -->

<----------------------------------------------------- QUESTION 8 --------------------------------------------------------------->

What are js modules?
<!-- modules allow you to organize code into reusable files using import and export -->

<----------------------------------------------------- QUESTION 9 --------------------------------------------------------------->

Difference between primitive and non primitive data types.
<!-- primitive data types stores single piece of data. fixed size in memory. they are predefined by the language.
Non-primitive data types can hold collections. They are not defined by the programming language. -->

<----------------------------------------------------- QUESTION 10 --------------------------------------------------------------->

what is difference between let, const and var?
<!-- var: function scoped, allows redeclaration, reassigning value, hoisted to the top of its scope, can be used before declaration.
let: block scoped, cannot be redeclared in the same scope, can be reassigned, not hoisted to the top of its block, can only be used after declaration.
const: block scoped, cannot be redeclared or reassigned, must be initialized at the time of declaration, and is not hoisted. -->

<----------------------------------------------------- QUESTION 11 --------------------------------------------------------------->

what is difference between == and ===?

<!-- == check values
=== checks for value and value types.

const a = 5;
const b = "5";

console.log(a==b)  // true
console.log(a===b) // false -->

<----------------------------------------------------- QUESTION 12 --------------------------------------------------------------->

what is closure?
<!-- A closure is a function that retains access to its outer scope variables even after the outer function has executed. -->

<!-- function outer(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()) //1
console.log(counter()) //2 -->

<----------------------------------------------------- QUESTION 13 --------------------------------------------------------------->

What is hoisting?
<!-- Hoisting moves variables and function declaration to top of their scope during compilation. -->

<----------------------------------------------------- QUESTION 14 --------------------------------------------------------------->

Difference between debounce and trottle?

<!-- 
Debounce ensures that a function is only executed once after a specific delay has passed since the last time it was called.

Use Case:
Used when you want to wait until the user stops triggering the event, like:
Search input field (wait until the user finishes typing)
Auto-save after user stops typing

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
} 
-->

<!-- clearTimeout(debounceState)
const inDebounce = setTimeout(()=>{
  //logic
},1000)
setDebounceState(inDebounce) -->


<!-- Throttle ensures that a function is executed at regular intervals no matter how many times the event is triggered.

Use Case:
Used when you want to limit how often a function runs, like:

Scroll event handler
Window resize listener
Button click spamming prevention

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
} -->


<----------------------------------------------------- QUESTION 15 --------------------------------------------------------------->

explain this keyword in js?
<!-- this refers to the context in which a function is executed. its value depends on how the function is called.
const obj ={
  name: "shafi",
  greet(){
    console.log("my name is ${this.name}")
  }
}

obj.greet() -->

<----------------------------------------------------- QUESTION 16 --------------------------------------------------------------->

what are js prototypes?
<!-- prototypes allow objects to inherit properties and methods from other objects.

function Person(name){
  this.name = name
}

Person.prototype.greet = function(){
  return `Hello ${this.name}`
}

const person = new Person('shafi')
console.log(person.greet()) -->

<----------------------------------------------------- QUESTION 17 --------------------------------------------------------------->

how can you prevent a function from being called multiple times?
<!-- you can use debounce. -->

<----------------------------------------------------- QUESTION 18 --------------------------------------------------------------->

What is event loop in js?
<!-- the event loop processes tasks from the stack and queue for asynchronous operations. -->

<!-- console.log("start")
setTimeout(()=>console.log("Timeout"),0)
console.log("end)

console.log("start") runs immediately.

setTimeout(..., 0) doesn’t execute instantly — it's pushed to the callback queue after 0 ms but only runs after the current call stack is clear.

console.log("end") runs next. -->

<!-- o/p:-start
end
timeout -->


<----------------------------------------------------- QUESTION 19 --------------------------------------------------------------->

Difference between filter and find?
<!-- Returns a new array with all elements that pass a test (return true in the callback).

array.filter((element, index, array) => {
  return condition;
});

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

Returns the first element that passes the test.

array.find((element, index, array) => {
  return condition;
});

const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2 -->

<----------------------------------------------------- QUESTION 20 --------------------------------------------------------------->

Difference between reduce and flat?
<!-- 
Used to accumulate array values into a single value (which can be a number, array, object, etc.).

array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10


Used to flatten nested arrays — it removes one or more levels of nesting.

array.flat(depth);  

const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6] 
-->

<----------------------------------------------------- QUESTION 21 --------------------------------------------------------------->

difference between npx and npm
<!-- npm -
Used to install, manage, and run packages (libraries/tools) from the npm registry.  
npx - 
Used to run packages without installing them globally. -->

<----------------------------------------------------- QUESTION 22 --------------------------------------------------------------->

difference between apply() and call()?

<!-- call(): invokes a function with a specific this value and arguments passed individually. 
apply(): similar to call(), but arguments are passed as an array.

function greet(greeting,punctuation){
  return `${greeting}, ${this.name} ${punctuation}`
}

const person = { name:'siva' }

console.log(greet.call(person,"Hello","!") ) Hello siva!
console.log(greet.apply(person,["Hello","!"])) -->

What is bind() method used for?
<!-- The bind() method creates a new function with a specific this value and optional arguments. -->

<!-- function greet(greeting){
  return `${greeting}, ${this.name}`
}

const person = { name:'siva' }

const hello = greet.bind(person)

console.log(hello("Hai")) -->

<----------------------------------------------------- QUESTION 22 --------------------------------------------------------------->

Explain the concept of "event bubbling" and "event capturing".

<!-- Event Bubbling: Events propagate from the target element
to the parent elements.
Event Capturing: Events propagate from the parent
elements to the target element. -->
<!-- 
document.getElementById("child").addEventListener("click",()=>
  console.log("Child"),true) //capturing

document.getElementById("parent").addEventListener("click",()=>
  console.log("Parent")) //bubbling -->

<----------------------------------------------------- QUESTION 22 --------------------------------------------------------------->

what is difference b/w deep and shallow copy?

<!-- Shallow Copy: Copies only the first layer of an object.
Deep Copy: Copies all layers of an object

let obj = {a:1,b:{c:2}};
let shallow = {...obj};
let deep = JSON.parse(JSON.stringify(obj)) -->

<----------------------------------------------------- QUESTION 22 --------------------------------------------------------------->

What are generator functions?

<!-- Generators are special functions that can pause execution and resume later.

Generators can be used to implement state machines, where the yield keyword represents a state transition. This can be useful for managing complex control flows.

function* generator(){
  yeild 1;
  yield 2;
  yield 3;
}

const gen = generator()
console.log(gen.next().value) //1
console.log(gen.next().value) //2

function* stateMachine() {
  let state = 'A';

  while (true) {
    switch (state) {
      case 'A':
        console.log('State A');
        state = yield;
        break;
      case 'B':
        console.log('State B');
        state = yield;
        break;
      case 'C':
        console.log('State C');
        state = yield;
        break;
      default:
        console.log('Invalid State');
        state = yield;
    }
  }
}

const sm = stateMachine();
sm.next(); // Start in state A
sm.next('B'); // Transition to state B
sm.next('C'); // Transition to state C
sm.next('A'); // Transition to state A
sm.next('D'); // Transition to Invalid State -->

<----------------------------------------------------- QUESTION 24 --------------------------------------------------------------->

What is the new keyword used for?
<!-- The new keyword creates an instance of an object from a
constructor function. -->

<!-- function Person(name){
  this.name = name;
}

const person = new Person("Siva")
  console.log(person.name) -->

<----------------------------------------------------- QUESTION 25 --------------------------------------------------------------->

what is difference between setTimeout and setInterval?
<!-- setTimeout: Executes a function after a specified delay.
setInterval: Repeats execution at specified intervals.

setTimeout(()=>console.log("Timeout"),1000)
setInterval(()=>console.log("Interval"),2000) -->

<----------------------------------------------------- QUESTION 26 --------------------------------------------------------------->

what is weakmap and how it is different from map?
<!-- WeakMap: Keys are only objects and are garbage collected.
Map: Keys can be any type

let obj = { key: "value"};
let weakMap = new WeakMap();
weakMap.set(obj,"data")   -->

<----------------------------------------------------- QUESTION 27 --------------------------------------------------------------->

What is a Set in js?
<!-- A set is a collection of unique values

const set = new Set([1,2,3,4,3,4])
console.log(set) -->

<----------------------------------------------------- QUESTION 28 --------------------------------------------------------------->

what is Object.create() used for?
<!-- it creates a new object with a specified prototype.

const proto = { greet: ()=>"Hello" }
const obj = Object.create(proto)
console.log(obj.greet()) -->

<----------------------------------------------------- QUESTION 29 --------------------------------------------------------------->

How does JavaScript’s garbage collection work?
<!-- JavaScript uses a mark-and-sweep algorithm to identify and remove unused objects.

function createObject(){
  const obj = { name: "Siva" }
  console.log(obj.name)
}

createObject() //after execution obj is no longer accessible, so it is garbage collected. -->

<----------------------------------------------------- QUESTION 30 --------------------------------------------------------------->

What are "decorators" in JavaScript?
<!-- Decorators are functions that modify classes or methods.
They are experimental features.

function decorator(target){
  target.isDecorated = true;
}

@decorator

class Example{}
console.log(Example.isDecorated); -->

<----------------------------------------------------- QUESTION 31 --------------------------------------------------------------->

Explain the difference between prototype and
__proto__.

<!-- prototype: An object associated with functions for inheritance.
__proto__: A reference to the object's prototype. -->

<----------------------------------------------------- QUESTION 32 --------------------------------------------------------------->

