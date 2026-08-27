
# Bug Tracker — Student Worksheet
Mark each bug as you fix it. Write the file, line, and your fix.
| # | File | Fixed? | Root cause (in your words) | Your fix |
|---|------|:------:|----------------------------|----------|
| BUG 1 | 01_basic.js  |[yes]| if('0'==0){console.log(loose equality trap)} this condition is false because both datatype is different  but in this case it becomes true  due to == . its allow type corecion so '0' is a string datatype it is converted to number datatype then compare  | i will removed '==' and add '===' . my fixed code is 
if('0'===0) {
    console.log('loose equality trap')
} |
|BUG 2 | 01_basic.js | [yes ] |function scopeTest() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
} scopeTest() 
this function print 3 3 3 because due to var . it is a function scope so its not create a new variable for each loop and at the time of setTimeout() is execute  after 100 ms , the loop is ended so the closure remember outer function variable and it is I =3 so it is print 3 3 3    | i will replace let in case of var the correct code is 
function(){
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
} scopeTest()  and return 0 1 2 |
| BUG 3 | 01_basic.js | [yes ] |
const PI = 3.14;
PI = 3.14159; in case of const reassign is not possible so it is a error  | in case of const i will use let and my fixed code is let pi=3.14
                         pi=3.14159 |
| BUG 4 | 01_basic.js | [ yes] | console.log(myUndeclaredVar); this code print undeclared variable so its show the variable is not found  but in case of javascript first variable declare then use  | my fixed code is let myUndeclaredVar ;
console.log(myUndeclaredVar) it return undefined because variable is assigned|
| BUG 5 | 01_basic.js | [yes ] |
sayHi();
const sayHi = function () {
  console.log("hi");
}; this code gives error because in this code first function is call then it is declare in case of variable hoisting possiable but in  case of functio hoisting is not possiable  | first i will declare the function the call the function . my fixed code is 
const sayHi=function(){
    console.log('hi')
} 
sayHi() |
| BUG 6 |01_basic.js  | [ yes] |
let r = 0 / 0;
if (r === NaN) {
  console.log("is NaN");
} 
in this code r also NaN so the condition NaN === NaN is return  false because NaN value is changed every time so block code is not execute   |  if i will check r is NaN or not so i can use isNaN method . my fixed code is
let r=0/0
if( isNaN(r)){
    console.log('is NaN')
} |
| BUG 7 | 01_basic.js | [ yes] |
let total = "5" + 1;
console.log(total); 
in javascript '+' is string concatinate method  so '5' is string and 1 is number it is concartinate each other  and give '51' .     |if i will use mathematical purpose  first i will Converted "5" to a number using Number() before performing the addition. my fixed code is 
let total= Number('5')+1 ;
console.log(total)
 |
| BUG 8 | 01_basic.js | [yes ] | 
let arr = [10, 20, 30];
for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}
according to this code condition last index 30 is not printed because i<arr.length give 2 index but i<arr.length-1 give 1 index so its print 10 20  | if i will want all index is print then i will remove -1 from condition or write i<=arr.length-1 . my fixed conde is 
let arr = [10,20,30]
for(let i=0;i<arr.length;i++) {
    console.log(arr[i])
    }|
| BUG 9 |01_basic.js  | [ yes] |
let n = 0;
while (n < 5) {
  console.log(n);
} in this updation field is not present so this code run infinite time because all time condition is true   | Then first i will add updation field . my fixed code is 
let n=0 ;
while(n<5){
    console.log(n)
    n ++ ;
} |

|BUG 10 | 01_basic.js | [yes ] |
let x = 5;
if ((x = 10)) {
  console.log("always true");
} in this code x = 10 is an assignment, not a comparison. It changes x from 5 to 10. So condition return true and the if block executes.  |first i will replace = with === . my fy fixed code is  
let x=5 ;
if((x===10)){
    console.log('always true')
} |
| BUG 11 |01_basic.js  | [yes ] |
let val = parseInt("08");
console.log(val); this code run and return true but in case of parseInt miss base  |first i will add base in parseInt . my fixed code is 
let val =parseInt("8",10);
console.log(val)  |
| BUG 12 | 01_basic.js | [yes ] |
let data = null;
if (typeof data === "null") {
  console.log("data is null");
}
typeof null returns "object" in JavaScript . Therefore, it will never equal "null". so block code is not execute because  condition return false  | my fixed code is 
let data=null;
if(data===null){
    console.log('data is null')
}  |
| BUG 13 |01_basic.js   | [yes ] |
let list = [1, 2, 3];
list[10] = 99;
console.log(list.length); it is not a bug but i can use push() in case of list[10]=99 because 3 index to 9 index is empty   |my fixed code is 
let list =[1,2,3];
list.push (99) 
console.log(list.legth) return 4|
| BUG 14 | 01_basic.js | [yes ] |
let y;
if (y == false) {
  console.log("y is falsey?");
}  |  |
