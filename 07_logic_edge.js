// 07_logic_edge.js
// FIND & FIX THE BUGS.
// Category: algorithmic logic, edge cases, number handling, regex, dates.

// BUG 84: floating point comparison without tolerance
if (0.1 + 0.2 === 0.3) {
  console.log("exact"); // never runs
}

// BUG 85: Math.max with an array (needs spread)
let scores = [3, 7, 2];
console.log(Math.max(scores)); // NaN

// BUG 86: Math.round misused for 2 decimals
let money = 5.567;
console.log(Math.round(money)); // 6, loses decimals

// BUG 87: modulo with negative numbers assumption
function isEven(n) {
  return n % 2 === 1 ? false : true; // -3 % 2 is -1, ok, but naming/logic fragile
}
console.log(isEven(-4));

// BUG 88: off-by-one building a range; misses upper bound
function range(start, end) {
  let out = [];
  for (let i = start; i < end; i++) {
    out.push(i);
  }
  return out;
}
console.log(range(1, 5)); // [1,2,3,4], often 5 expected

// BUG 89: swapping without temp using wrong logic
let a = 1, b = 2;
a = b;
b = a; // both become 2
console.log(a, b);

// BUG 90: regex without global flag counts once
let sentence = "the cat sat";
let matches = sentence.match(/at/);
console.log(matches.length); // 1, not counting all

// BUG 91: new Date month is 0-indexed
let d = new Date(2024, 12, 1); // month 12 rolls to January next year
console.log(d.toDateString());

// BUG 92: comparing dates with ===
let d1 = new Date(2024, 0, 1);
let d2 = new Date(2024, 0, 1);
if (d1 === d2) {
  console.log("same date"); // never true
}

// BUG 93: integer overflow assumption / Number precision
console.log(9999999999999999 === 10000000000000000); // true, precision loss

// BUG 94: ternary precedence without parentheses
let level = 5;
let label = "Level: " + level > 3 ? "high" : "low";
console.log(label); // surprising result

// BUG 95: falsy check removes valid 0
function firstTruthy(arr) {
  for (let v of arr) {
    if (v) return v;
  }
}
console.log(firstTruthy([0, "", 5])); // 5, skips valid 0 if 0 was desired

// BUG 96: string to number with + but empty string becomes 0
let raw = "";
console.log(+raw + 10); // 10, hides missing input

// BUG 97: array fill with reference shares the same object
let grid = new Array(3).fill([]);
grid[0].push(1);
console.log(grid[1]); // [1] too, shared reference

// BUG 98: chained optional logic; short-circuit returns wrong type
function getName(user) {
  return user && user.name || "Unknown";
}
console.log(getName({ name: "" })); // "Unknown" even though name provided

// BUG 99: recursion base case checked after recursive call
function sumTo(n) {
  let result = sumTo(n - 1); // recurse first, never stops
  if (n === 0) return 0;
  return n + result;
}

// BUG 100: using length on a possibly undefined value
function countChars(str) {
  return str.length;
}
console.log(countChars()); // TypeError: cannot read length of undefined

// BUG 101: incrementing string then using as number
let clicks = "0";
clicks++;
console.log(clicks + 1); // becomes 2 here but fragile; started as string

// BUG 102: comparing with typeof result misspelled
let value = 5;
if (typeof value === "nubmer") {
  console.log("is number"); // typo, never runs
}

// BUG 103: array destructuring with wrong order assumption
let [first, second] = [1, 2, 3];
console.log(second, first); // logic depends on order; easy to swap by mistake

// BUG 104: using delete on array index inside a sum loop
let vals = [10, 20, 30];
delete vals[1];
let sum = 0;
for (let i = 0; i < vals.length; i++) {
  sum += vals[i]; // NaN because hole is undefined
}
console.log(sum);
