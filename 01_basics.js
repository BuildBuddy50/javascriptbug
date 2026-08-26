// 01_basics.js
// FIND & FIX THE BUGS. Each numbered comment marks one bug to locate and fix.
// Category: variables, scope, type coercion, operators, loops, conditionals.

// BUG 1: 
if ("0" == 0) {
  console.log("loose equality trap");
}

// BUG 2:
function scopeTest() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}

// BUG 3:
const PI = 3.14;
PI = 3.14159;

// BUG 4: 
console.log(myUndeclaredVar);

// BUG 5:
sayHi();
const sayHi = function () {
  console.log("hi");
};

// BUG 6: 
let r = 0 / 0;
if (r === NaN) {
  console.log("is NaN");
}

// BUG 7: 
let total = "5" + 1;
console.log(total);

// BUG 8: 
let arr = [10, 20, 30];
for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

// BUG 9: 
let n = 0;
while (n < 5) {
  console.log(n);
}

// BUG 10:
let x = 5;
if ((x = 10)) {
  console.log("always true");
}

// BUG 11:
let val = parseInt("08");
console.log(val);

// BUG 12: 
let data = null;
if (typeof data === "null") {
  console.log("data is null");
}

// BUG 13: 
let list = [1, 2, 3];
list[10] = 99;
console.log(list.length);

// BUG 14: 
let y;
if (y == false) {
  console.log("y is falsey?");
}

scopeTest();
