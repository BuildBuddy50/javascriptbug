// 05_objects_classes.js
// FIND & FIX THE BUGS.
// Category: objects, classes, prototypes, 'this', inheritance, JSON.

// BUG 58: class method calls another method without 'this'
class Calculator {
  add(a, b) {
    return a + b;
  }
  addThenDouble(a, b) {
    return double(add(a, b)); // add/double not in scope
  }
  double(x) {
    return x * 2;
  }
}

// BUG 59: constructor does not use 'this' to set fields
class Person {
  constructor(name) {
    name = name; // does nothing useful
  }
  greet() {
    return "Hi " + this.name;
  }
}
console.log(new Person("Sam").greet());

// BUG 60: extending without super() in subclass constructor
class Animal {
  constructor(sound) {
    this.sound = sound;
  }
}
class Cat extends Animal {
  constructor() {
    this.legs = 4; // ReferenceError: must call super first
  }
}

// BUG 61: method defined with comma like an object (invalid in class)
class Box {
  width = 10,
  height = 20
}

// BUG 62: 'this' lost when method passed as callback
class Timer {
  constructor() {
    this.seconds = 0;
  }
  tick() {
    this.seconds++;
  }
  run() {
    setInterval(this.tick, 1000); // 'this' undefined inside tick
  }
}

// BUG 63: JSON.parse on an object (expects string)
let obj = { a: 1 };
let parsed = JSON.parse(obj);

// BUG 64: JSON.stringify drops functions and undefined silently
let payload = { name: "x", run: function () {}, val: undefined };
console.log(JSON.stringify(payload)); // {"name":"x"} - lost fields

// BUG 65: for...in used on array iterates keys as strings
let arr = [10, 20, 30];
for (let idx in arr) {
  console.log(idx + 1); // "01","11","21" string concat
}

// BUG 66: hasOwnProperty called incorrectly / inherited props leak
let base = { shared: true };
let child = Object.create(base);
child.own = 1;
for (let key in child) {
  console.log(key); // logs 'shared' too
}

// BUG 67: object shorthand typo; property name mismatch
function makeUser(name, age) {
  return { name: name, aeg: age }; // typo 'aeg'
}
console.log(makeUser("A", 30).age);

// BUG 68: comparing NaN field; Object.is needed
let m = { v: NaN };
console.log(m.v === NaN);

// BUG 69: freezing then mutating; silent fail (or throw in strict)
const settings = Object.freeze({ theme: "dark" });
settings.theme = "light";
console.log(settings.theme);

// BUG 70: getter defined but called like a method
class Circle {
  constructor(r) {
    this.r = r;
  }
  get area() {
    return 3.14 * this.r * this.r;
  }
}
console.log(new Circle(2).area()); // area is a getter, not a function
