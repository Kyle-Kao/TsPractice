let input1 = document.querySelector('#num1')! as HTMLInputElement
let input2 = document.querySelector('#num2')! as HTMLInputElement
let sum = document.querySelector('#sum')!as HTMLInputElement

let add = (num1: number, num2: number)=>{
  return num1 + num2 
}

sum.addEventListener('click',()=>{
  console.log(add(+input1.value, +input2.value))
})