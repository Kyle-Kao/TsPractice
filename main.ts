function add(n1:number,n2:number, showResult: boolean, phrase: string){
  if(showResult){
    let res = (n1 +n2).toFixed(2)
    console.log(phrase + res)
  }
  return n1 + n2
}
const number1 = 5;
const number2 = 2.8845682
const printResult = true
const resultPhrase = 'Result is: '
add(number1,number2,printResult,resultPhrase)
