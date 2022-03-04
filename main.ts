function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    let res = (n1 + n2).toFixed(2);
    console.log(phrase + res);
  }
  return n1 + n2;
}
const number1 = 5;
const number2 = 2.8845682;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if ((typeof input1 == 'number' && typeof input2 == 'number') || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 288, 'as-number');
console.log(combinedAges);

const combinedNames = combine('ALX', 'KYLE', 'as-text');
console.log(combinedNames);

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };
function greet(user: User) {
  console.log('HI, i am ' + user.name);
}
function isOlder(user: User, checkAge: number) {
  if (checkAge > user.age) console.log(checkAge + '>' + user.age);
}
greet(u1);
isOlder(u1, 40);

/*
  callback
*/
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(20, 20, (res) => {
  console.log('cb: ' + res);
});

/*
  type unknown
  type unkonwn 不能指派給 type string
*/
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

/* 
  type never : 表示永遠不存在的值
  1. 應該要回傳卻沒有回傳的函示 ， EX: 無窮迴圈，沒有任何結束的執行點
  2. 總是拋出錯誤的函示
*/
function generateError(message:string, code: number): never{
  throw {message: message , errorCode: code}
}
generateError("Here is an error!", 500)

