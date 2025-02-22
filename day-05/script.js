// spread operator  - ... -  object and array
// const obj = {
//     username:'Asad',
//     city: 'Karachi',
//     country: 'Pakistan'
// }

// const obj02 = {
//     ...obj,
//     city: 'Lahore',
//     phone: '1234567890',
//     email:'mail@gmail.com'
// }
// console.log(obj02)

// const obj01 = {
//     username: 'Asad',
//     city: 'Karachi',
//     country: 'Pakistan'
// }

// const obj02 = {
//     phone: '1234567890',
//     email: 'mail@gmail.com'
// }

// const userData = {
//     ...obj01,
// }

// console.log(userData)


// ----------- 
// rest operator  - ... 
// function restFunc(num1, num2, ...restValues ) {
//     let sum =  num1 + num2 

//     for (let index = 0; index < restValues.length; index++) {
//         // sum += parseInt(restValues[index]);
//         const converToNum = restValues[index]
//         if(typeof converToNum === 'number'){
//             sum += +restValues[index];
//         }
//     }
//     return sum

// }

// console.log(restFunc(1,3,'5',6,'7',8,'a',11))

// console.log(typeof +'a')
// console.log(NaN === Number('a'))


// Functions -----

//normal function

// function func() {

// }

// var newFunc = function(){

// }

// arguments
// function arguFunc() {
//     console.log(arguments)
// }
// arguFunc(1,2,4,5,6)

// hoisting 
// hoistFunc()
// function hoistFunc() {
//     console.log('this is a function')
// }

// This keyword  
// function thisScopeFunc() {
//     console.log(this)
// }
// thisScopeFunc()

// const userData = {
//     username: 'Saad',
//     func: function () {
//         console.log(`Hello ${this.username}`)
//     }
// }

// userData.username = 'Asad'
// userData.func()

// function sumFunc(num1, num2) {
//     return num1 + num2
// }
// function sumFunc(num1, num2) {
//     console.log(num1, num2)
//     return num1 + num2
// }
// console.log(sumFunc(num2 = 1, num1 = 4))

// Arrow Function
// const newFunc = (num1, num2) => {
//     return num1 + num2
// }

// const shortHand = (num1, num2) => num1 + num2

// console.log(shortHand(2, 4))

// arrow arguments 
// const argArrowFunc = () => {
//     console.log(arguments)
// }

// argArrowFunc(1,23,456,78)


// hoisting 
// const arrowFuncHoist = () => {
//     console.log('this is an arrow this')
// }


// this keyword
// const userData = {
//     username: 'Saad',
//     func: () => {
//         console.log(first)
//         console.log(`Hello ${this.username}`)
//     }
// }

// userData.username = 'Asad'
// userData.func()


// -----------------------------------------------


// IIFE - Immediate invoke function expression ---
// (() => {
//     console.log(5 + 7)
// })()

// ((num1, num2 ) => {
//     console.log(num1 + num2)
// })(2, 4)

// const numSum = 1 + 3


// ------------------------------------------
// Higher-Order Functions (HOF) 
// const hofFunc = (num1, num2, func) => {
//     const sum = num1 + num2
//     func(sum)
// }

// const getTotalFunc = (total)=> {
//     console.log(total)
// }

// getTotalFunc(30)

// hofFunc(4, 10, getTotalFunc)

// hofFunc(4, 6, (total)=> {
//         console.log(total)
// })

// setTimeout(() => {
//     console.log('set time out')
// }, 2000);

// -------------------------------------------

// forEach  
// const arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// arr.forEach((elem, index)=> {
//     sum += elem
// })
// console.log(sum)