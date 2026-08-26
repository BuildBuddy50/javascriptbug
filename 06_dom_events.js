// 06_dom_events.js
// FIND & FIX THE BUGS.
// Category: DOM manipulation, events, browser APIs.
// (Run these in a browser / with an HTML page. Bugs are logic + API misuse.)

// BUG 71: getElementById with a leading '#' (that's a querySelector thing)
let header = document.getElementById("#title");

// BUG 72: querySelector returns first only; code treats it as a list
let buttons = document.querySelector(".btn");
buttons.forEach(function (b) {
  b.disabled = true;
});

// BUG 73: addEventListener with the function invoked instead of referenced
function handleClick() {
  console.log("clicked");
}
document.getElementById("save").addEventListener("click", handleClick());

// BUG 74: innerHTML vs textContent; injecting user text as HTML (XSS risk)
let userInput = "<img src=x onerror=alert(1)>";
document.getElementById("out").innerHTML = userInput;

// BUG 75: reading value before element exists (script runs before DOM)
let field = document.getElementById("email").value;

// BUG 76: 'this' inside arrow event handler is not the element
let box = document.getElementById("box");
box.addEventListener("click", () => {
  this.style.background = "red"; // 'this' is not box
});

// BUG 77: not preventing default on form submit; page reloads
document.getElementById("form").addEventListener("submit", function (e) {
  console.log("submitted");
});

// BUG 78: comparing event.target with a selector string
document.addEventListener("click", function (e) {
  if (e.target === ".menu") {
    console.log("menu clicked");
  }
});

// BUG 79: setAttribute for a boolean property misused
let input = document.getElementById("agree");
input.setAttribute("checked", false); // still checked; attribute presence matters

// BUG 80: createElement then never appended
let div = document.createElement("div");
div.textContent = "new";
// missing document.body.appendChild(div)

// BUG 81: classList.add with multiple classes as one string containing spaces
let el = document.getElementById("card");
el.classList.add("active selected"); // throws / invalid token

// BUG 82: reassigning onclick overwrites previous handler
let btn = document.getElementById("go");
btn.onclick = function () { console.log("one"); };
btn.onclick = function () { console.log("two"); }; // 'one' lost

// BUG 83: parseInt on element value not needed check; NaN not handled
let qty = parseInt(document.getElementById("qty").value);
let price = 10;
console.log(qty * price); // NaN if empty
