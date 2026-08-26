// 03_arrays_strings.js
// FIND & FIX THE BUGS.
// Category: array manipulation, string methods, indexing, iteration.

// BUG 31: includes vs indexOf confusion; indexOf returns index, not boolean
let fruits = ["apple", "banana"];
if (fruits.indexOf("apple")) {
  console.log("has apple"); // fails because indexOf('apple') is 0 (falsy)
}

// BUG 32: splice vs slice; splice mutates the original
let source = [1, 2, 3, 4, 5];
let firstTwo = source.splice(0, 2);
console.log(source); // unexpectedly modified

// BUG 33: push returns new length, not the array
let items = [1, 2];
let newArr = items.push(3);
console.log(newArr); // 3, not [1,2,3]

// BUG 34: string is immutable; index assignment silently fails
let word = "hello";
word[0] = "H";
console.log(word); // still "hello"

// BUG 35: split with wrong separator
let csv = "a,b,c";
let parts = csv.split(";");
console.log(parts.length); // 1, not 3

// BUG 36: charAt out of range returns "" not the last char
let s = "abc";
console.log(s.charAt(10));

// BUG 37: reverse a string incorrectly (strings have no reverse method)
let str = "world";
console.log(str.reverse());

// BUG 38: concat vs push; concat does not mutate
let base = [1, 2];
base.concat([3, 4]);
console.log(base); // still [1,2]

// BUG 39: indexOf case sensitivity ignored
let list = ["Hello"];
console.log(list.indexOf("hello")); // -1

// BUG 40: join default is comma, code assumes space
let words = ["a", "b", "c"];
let sentence = words.join();
console.log(sentence); // "a,b,c" not "a b c"

// BUG 41: findIndex vs find confusion; find returns element
let nums = [5, 12, 8];
let big = nums.find(function (x) {
  return x > 10;
});
console.log("index is " + big); // logs 12, not index

// BUG 42: array holes from delete; length unchanged
let colors = ["red", "green", "blue"];
delete colors[1];
console.log(colors.length); // still 3, hole at index 1

// BUG 43: trim not applied; comparison fails
let input = " yes ";
if (input === "yes") {
  console.log("matched");
}

// BUG 44: replace only replaces first occurrence without /g
let text = "a-b-c";
console.log(text.replace("-", "_")); // "a_b-c"

// BUG 45: slice negative index misunderstanding
let data = [1, 2, 3, 4];
console.log(data.slice(-2, 1)); // [] empty, unexpected

// BUG 46: comparing array to string with ==
let arr = [1];
if (arr == "1") {
  console.log("coerced equal"); // surprising true
}
