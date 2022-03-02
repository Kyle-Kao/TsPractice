"use strict";
/* 此作法用於 TS 認知物件行別
    const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number , string] 限制role只有兩個參數且為數字與字串的組合
 } = { */
var txt;
(function (txt) {
    txt[txt["ADMIN"] = 0] = "ADMIN";
    txt[txt["READ_ONLY"] = 1] = "READ_ONLY";
    txt[txt["AUTHOR"] = 2] = "AUTHOR";
})(txt || (txt = {}));
const person = {
    name: "Kyle",
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author'],
    user: txt.ADMIN
};
/* 若使用 favoriteActivities : string[]
  在宣告 favoriteActivities = ['Sports' , 1] 時
  會因為 1 為數字 而無法編譯
  所以改用 any[]
  但這樣也失去 TS 的特性
*/
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
    /* console.log(hobby.map())
      因上方宣告為 string
      所以沒有 .map() 這個功能
    */
}
/*
  但今天你用推的方式改變陣列，仍是可以觸發的
*/
person.role.push('apple');
console.log(person.role);
/*
  enum可將變數的範圍限制在某些限制下並賦予其定義
  若沒有給予邊樹特定值得話，賦予的值 def 為 0 ~ data.length-1
  也可以將變數指向為字串，EX: ADMIN = "admin"
  指定為數字，enum也會自動累加， EX: ADMIN = 8， READ_ONLY 就會等於 9
  也可做邏輯運算 EX: ADMIN = 8， READ_ONLY = ADMIN + 1500
*/
if (person.user === txt.ADMIN) {
    console.log("is admin: " + txt.ADMIN);
}
