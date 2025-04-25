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
