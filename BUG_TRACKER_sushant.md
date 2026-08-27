# Bug Tracker — Student Worksheet

Mark each bug as you fix it. Write the file, line, and your fix.

| # | File | Fixed? | Root cause (in your words) | Your fix |
|---|------|:------:|----------------------------|----------|
| BUG 1 | 01_basic.js  |[yes]| if('0'==0){console.log(loose equality trap)} this condition is false because both datatype is different  but in this case it becomes true  due to == . its allow type corecion so '0' is a string datatype it is converted to number datatype then compare  | i will removed '==' and add '===' . my fixed code is 
if('0'===0) {
    console.log('loose equality trap')
}|


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
| BUG 10 | 01_basic.js  | [ yes] |  |  |
| 11 |  | [ ] |  |  |
| 12 |  | [ ] |  |  |
| 13 |  | [ ] |  |  |
| 14 |  | [ ] |  |  |
| 15 |  | [ ] |  |  |
| 16 |  | [ ] |  |  |
| 17 |  | [ ] |  |  |
| 18 |  | [ ] |  |  |
| 19 |  | [ ] |  |  |
| 20 |  | [ ] |  |  |
| 21 |  | [ ] |  |  |
| 22 |  | [ ] |  |  |
| 23 |  | [ ] |  |  |
| 24 |  | [ ] |  |  |
| 25 |  | [ ] |  |  |
| 26 |  | [ ] |  |  |
| 27 |  | [ ] |  |  |
| 28 |  | [ ] |  |  |
| 29 |  | [ ] |  |  |
| 30 |  | [ ] |  |  |
| 31 |  | [ ] |  |  |
| 32 |  | [ ] |  |  |
| 33 |  | [ ] |  |  |
| 34 |  | [ ] |  |  |
| 35 |  | [ ] |  |  |
| 36 |  | [ ] |  |  |
| 37 |  | [ ] |  |  |
| 38 |  | [ ] |  |  |
| 39 |  | [ ] |  |  |
| 40 |  | [ ] |  |  |
| 41 |  | [ ] |  |  |
| 42 |  | [ ] |  |  |
| 43 |  | [ ] |  |  |
| 44 |  | [ ] |  |  |
| 45 |  | [ ] |  |  |
| 46 |  | [ ] |  |  |
| 47 |  | [ ] |  |  |
| 48 |  | [ ] |  |  |
| 49 |  | [ ] |  |  |
| 50 |  | [ ] |  |  |
| 51 |  | [ ] |  |  |
| 52 |  | [ ] |  |  |
| 53 |  | [ ] |  |  |
| 54 |  | [ ] |  |  |
| 55 |  | [ ] |  |  |
| 56 |  | [ ] |  |  |
| 57 |  | [ ] |  |  |
| 58 |  | [ ] |  |  |
| 59 |  | [ ] |  |  |
| 60 |  | [ ] |  |  |
| 61 |  | [ ] |  |  |
| 62 |  | [ ] |  |  |
| 63 |  | [ ] |  |  |
| 64 |  | [ ] |  |  |
| 65 |  | [ ] |  |  |
| 66 |  | [ ] |  |  |
| 67 |  | [ ] |  |  |
| 68 |  | [ ] |  |  |
| 69 |  | [ ] |  |  |
| 70 |  | [ ] |  |  |
| 71 |  | [ ] |  |  |
| 72 |  | [ ] |  |  |
| 73 |  | [ ] |  |  |
| 74 |  | [ ] |  |  |
| 75 |  | [ ] |  |  |
| 76 |  | [ ] |  |  |
| 77 |  | [ ] |  |  |
| 78 |  | [ ] |  |  |
| 79 |  | [ ] |  |  |
| 80 |  | [ ] |  |  |
| 81 |  | [ ] |  |  |
| 82 |  | [ ] |  |  |
| 83 |  | [ ] |  |  |
| 84 |  | [ ] |  |  |
| 85 |  | [ ] |  |  |
| 86 |  | [ ] |  |  |
| 87 |  | [ ] |  |  |
| 88 |  | [ ] |  |  |
| 89 |  | [ ] |  |  |
| 90 |  | [ ] |  |  |
| 91 |  | [ ] |  |  |
| 92 |  | [ ] |  |  |
| 93 |  | [ ] |  |  |
| 94 |  | [ ] |  |  |
| 95 |  | [ ] |  |  |
| 96 |  | [ ] |  |  |
| 97 |  | [ ] |  |  |
| 98 |  | [ ] |  |  |
| 99 |  | [ ] |  |  |
| 100 |  | [ ] |  |  |
| 101 |  | [ ] |  |  |
| 102 |  | [ ] |  |  |
| 103 |  | [ ] |  |  |
| 104 |  | [ ] |  |  |
