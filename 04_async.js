// 04_async.js
// FIND & FIX THE BUGS.
// Category: promises, async/await, callbacks, timing, error handling.

// BUG 47: forgetting to return the promise; caller cannot chain
function fetchUser() {
  fetch("https://api.example.com/user").then(function (res) {
    return res.json();
  });
}

// BUG 48: async function but await missing; data is a Promise
async function loadData() {
  let data = fetch("https://api.example.com/data");
  console.log(data.length);
}

// BUG 49: mixing await with .then awkwardly / double handling
async function getValue() {
  let v = await Promise.resolve(10).then(function (x) {
    return x;
  });
  return v;
}

// BUG 50: no catch / unhandled rejection
async function risky() {
  let res = await Promise.reject(new Error("boom"));
  return res;
}
risky();

// BUG 51: await used outside async function (syntax error)
function notAsync() {
  let result = await Promise.resolve(5);
  return result;
}

// BUG 52: Promise.all misused with non-array
Promise.all(Promise.resolve(1), Promise.resolve(2)).then(function (r) {
  console.log(r);
});

// BUG 53: setTimeout callback expects value synchronously
function getLater() {
  let value;
  setTimeout(function () {
    value = 42;
  }, 100);
  return value; // undefined
}
console.log(getLater());

// BUG 54: forgetting new Promise executor calls resolve
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      // resolve never called
    }, ms);
  });
}

// BUG 55: try/catch cannot catch async errors without await
async function handle() {
  try {
    Promise.reject(new Error("nope"));
  } catch (e) {
    console.log("caught", e.message); // never catches
  }
}
handle();

// BUG 56: race condition; loop var captured by async callback
function fireAll() {
  for (var i = 0; i < 3; i++) {
    Promise.resolve().then(function () {
      console.log(i); // 3,3,3
    });
  }
}
fireAll();

// BUG 57: returning inside forEach does not stop async flow
async function processAll(ids) {
  ids.forEach(async function (id) {
    await Promise.resolve(id);
  });
  console.log("done"); // logs before items finish
}
