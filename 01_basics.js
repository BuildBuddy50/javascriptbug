// 01_basics.js
// FIND & FIX THE BUGS. Each numbered comment marks one bug to locate and fix.
// Category: variables, scope, type coercion, operators, loops, conditionals.

// BUG 1: using == causes type coercion; "0" == 0 is true unexpectedly
if ("0" == 0) {
  console.log("loose equality trap");
}

// BUG 2: var in loop + closure; prints 3,3,3 instead of 0,1,2
function scopeTest() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}

// BUG 3: reassigning a const
const PI = 3.14;
PI = 3.14159;

// BUG 4: undefined variable used (never declared)
console.log(myUndeclaredVar);

// BUG 5: calling a const function expression before it is assigned (TDZ)
sayHi();
const sayHi = function () {
  console.log("hi");
};

// BUG 6: NaN comparison; NaN === NaN is always false
let r = 0 / 0;
if (r === NaN) {
  console.log("is NaN");
}

// BUG 7: string + number coercion produces "51" not 6
let total = "5" + 1;
console.log(total);

// BUG 8: off-by-one; misses the last element
let arr = [10, 20, 30];
for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

// BUG 9: infinite loop; counter never incremented
let n = 0;
while (n < 5) {
  console.log(n);
}

// BUG 10: assignment inside condition instead of comparison
let x = 5;
if ((x = 10)) {
  console.log("always true");
}

// BUG 11: parseInt without radix
let val = parseInt("08");
console.log(val);

// BUG 12: typeof null is "object", not "null"; check never runs
let data = null;
if (typeof data === "null") {
  console.log("data is null");
}

// BUG 13: sparse array via out-of-range index; length becomes unexpected
let list = [1, 2, 3];
list[10] = 99;
console.log(list.length);

// BUG 14: confusing falsy comparison; undefined == false is false
let y;
if (y == false) {
  console.log("y is falsey?");
}

scopeTest();
