// 02_functions.js
// FIND & FIX THE BUGS.
// Category: functions, closures, objects, arrays, 'this', array methods.

// BUG 15: function missing return; result is undefined
function multiply(a, b) {
  let product = a * b;
}
console.log(multiply(3, 4));

// BUG 16: default via || breaks on 0; increment(5,0) returns 6 not 5
function increment(value, step) {
  step = step || 1;
  return value + step;
}
console.log(increment(5, 0));

// BUG 17: 'this' inside a regular callback loses context; count is NaN
const counter = {
  count: 0,
  start: function () {
    setInterval(function () {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};

// BUG 18: mutating array while iterating with forEach; skips elements
let numbers = [1, 2, 3, 4];
numbers.forEach(function (num, idx) {
  if (num % 2 === 0) {
    numbers.splice(idx, 1);
  }
});

// BUG 19: map callback omits return; array of undefined
let doubled = [1, 2, 3].map(function (v) {
  v * 2;
});
console.log(doubled);

// BUG 20: object property access wrong case; undefined
const user = { firstName: "Ann", lastName: "Lee" };
console.log(user.firstname);

// BUG 21: comparing distinct objects with ===; never true
const o1 = { a: 1 };
const o2 = { a: 1 };
if (o1 === o2) {
  console.log("equal objects");
}

// BUG 22: array copied by reference; original mutated
let original = [1, 2, 3];
let copy = original;
copy.push(4);
console.log(original);

// BUG 23: reduce with no initial value on empty array throws
let sumEmpty = [].reduce(function (acc, cur) {
  return acc + cur;
});

// BUG 24: sort numbers without comparator (lexicographic order)
let toSort = [10, 1, 5, 20];
toSort.sort();
console.log(toSort);

// BUG 25: accessing nested property that does not exist -> TypeError
const config = {};
console.log(config.settings.theme);

// BUG 26: arrow function as method loses 'this'; value is undefined
const obj = {
  value: 42,
  getValue: () => {
    return this.value;
  },
};
console.log(obj.getValue());

// BUG 27: shallow spread copy; nested object still shared
const nested = { a: { b: 1 } };
const shallow = { ...nested };
shallow.a.b = 99;
console.log(nested.a.b);

// BUG 28: string method result discarded; strings are immutable
let greeting = "hello";
greeting.toUpperCase();
console.log(greeting);

// BUG 29: missing await; logs a Promise, not the value
function getData() {
  return Promise.resolve("data");
}
console.log(getData());

// BUG 30: recursion has no base case -> stack overflow
function countdown(k) {
  console.log(k);
  return countdown(k - 1);
}
