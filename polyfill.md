polyfill for call?

<!-- In JavaScript, Function.prototype.call allows you to:
Invoke a function with a specific this context
Pass arguments one by one -->

<!-- 
Object.prototype.myCall = function(callObj, ...params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  callObj.tempFunction = this;
  const result = callObj.tempFunction(...params);
  delete callObj.tempFunction;
  return result;
};

let object1 = {
  name: "Vivek",
  surname: "moradiya",
  printName: function(age) {
    return this.name + " " + this.surname + " " + age;
  }
};

let object2 = {
  name: "Amy",
  surname: "Patel"
};

console.log(object1.printName.myCall(object2, 22));  // Amy Patel 22 -->

<!--
this refers to the function being called (printName).
You're adding the function as a property of the callObj (like object2) and executing it—this ensures this inside the function refers to callObj.
This mimics how Function.prototype.call() works. 
-->

<----------------------------------------------------- QUESTION 1 --------------------------------------------------------------->

polyfill for apply

<!-- It calls a function with a specified this value and arguments provided as an array. -->

<!-- Object.prototype.myApply = function(applyObj, params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  applyObj.tempFunction = this;
  const result = applyObj.tempFunction(...params);
  delete applyObj.tempFunction;
  return result;
};

let object1 = {
  name: "Vivek",
  surname: "moradiya",
  printName: function(age, city) {
    return this.name + " " + this.surname + " " + age + " " + city;
  }
};

let object2 = {
  name: "Amy",
  surname: "Patel"
};

console.log(object1.printName.myApply(object2, [22, "morbi"]));  // Amy Patel 22 morbi -->

<----------------------------------------------------- QUESTION 2 --------------------------------------------------------------->

polyfill for bind

<!-- 
bind Returns a new function.
When the new function is called, it has its this set to the specified object.
You can also pre-fill some arguments (partial application).
 -->



<!-- Object.prototype.myBind = function(bindObj, ...params) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a Function");
  }
  const self = this;

  return function(...args) {
    return self.apply(bindObj, [...params, ...args]);
  };
};

let object1 = {
  name: "Vivek",
  surname: "moradiya",
  printName: function(age, city) {
    return this.name + " " + this.surname + " " + age + " " + city;
  }
};

let object2 = {
  name: "Amy",
  surname: "Patel"
};

let boundFunction = object1.printName.myBind(object2, 22, "Morbi");
console.log(boundFunction());  // Amy Patel 22 Morbi -->

<----------------------------------------------------- QUESTION 3 --------------------------------------------------------------->

map polyfill

<!-- Array.prototype.myMap = function(callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(context, this[i], i, this));
  }
  return arr;
};

let arr = [1, 2, 4, 5, 6, 4];
let context = {
  multiplier: 7,
  offset: 10
};

let newArr = arr.myMap(function(value) {
  return value * this.multiplier + this.offset;
}, context);

console.log(newArr);  // [17, 24, 38, 45, 52, 38] -->

<----------------------------------------------------- QUESTION 4 --------------------------------------------------------------->

<!-- Array.prototype.myFilter = function(callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let arr = [1, 2, 4, 5, 6, 4];
let context = {
  condition: 5
};

let newArr = arr.myFilter(function(value) {
  return value > this.condition;
}, context);

console.log(newArr);  // [6] -->

<----------------------------------------------------- QUESTION 5 --------------------------------------------------------------->

<!-- Array.prototype.myReduce = function(callback, acc) {
  let output = acc;
  let startIndex = 0;
  if (output === undefined) {
    output = this[0];
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    output = callback(output, this[i], i, this);
  }

  return output;
};

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] }
];
const allBooks = friends.myReduce((acc, cur) => [...acc, ...cur.books], []);

console.log(allBooks);  // ["Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"] -->

<----------------------------------------------------- QUESTION 6 --------------------------------------------------------------->

<!-- Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrData.myForEach((element) => {
  console.log(element);
}); -->


<----------------------------------------------------- QUESTION 7 --------------------------------------------------------------->

<!-- function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log('Debounced function called');
}, 2000);

debouncedFunction();
debouncedFunction();
debouncedFunction(); -->

<----------------------------------------------------- QUESTION 8 --------------------------------------------------------------->

<!-- function throttle(fn, limit) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const throttledFunction = throttle(() => {
  console.log('Throttled function called');
}, 2000);

throttledFunction();
throttledFunction();
throttledFunction(); -->

<----------------------------------------------------- QUESTION 9 --------------------------------------------------------------->

<!-- function myMemoize(fn) {
  const cache = {};

  return function(...args) {
    let argCache = JSON.stringify(args);

    if (!cache[argCache]) {
      cache[argCache] = fn.call(this, ...args);
    }

    return cache[argCache];
  };
}

const expensiveFunc = (num1, num2) => {
  let output = 1;
  for (let i = 0; i <= 10000000; i++) {
    output += i;
  }

  return num1 + num2 + output;
}

const memoizeFunc = myMemoize(expensiveFunc);

console.time();
console.log(memoizeFunc(1, 2));
console.timeEnd();

console.time();
console.log(memoizeFunc(1, 2));
console.timeEnd(); -->


<----------------------------------------------------- QUESTION 10 --------------------------------------------------------------->


<!-- const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 1");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("rejected 2");
  }, 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

const p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

Promise.myAll = function (promises) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === promises.length) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.myAll([p1, p3, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); -->