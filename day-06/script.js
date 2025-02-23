// Array methods (loops)  -------------
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// forEach - not returns 
// const forEachValues = arr.forEach((item, index )=>{
//     return item
// })
// console.log(forEachValues)

// map - new array 
// const mapValues = arr.map((item, index)=> {
// return item
// return item % 2 === 0 ? item : null
// })
// console.log(mapValues)


// filter - 
// const filterValues = arr.filter((item, index)=> {
//     return item % 2 === 0 
// })
// console.log(filterValues)


// 0 - false
// 1 - true


// -------------------------------------
// Shallow copy & Deep copy
// const obj = {
//     id: 1,
//     email: "john@mail.com",
//     password: "changeme",
//     name: "Jhon",
//     profile: {
//         role: "customer",
//         city:'Karachi',
//         country: 'Pakistan'
//     }
// }
// --- Shallow copy

// const obj01 = { ...obj }

// obj01.profile.city = 'Lahore'
// obj01.email = 'update@mail.com'

// console.log('obj01', obj01)
// console.log('obj', obj)

// --- Deep copy
// const convertToStringify = JSON.stringify(obj) // --- converted as a string 
// const obj02 = JSON.parse(convertToStringify) // --- converted to object again
// obj02.profile.city = "Islamabad"

// console.log(obj)
// console.log(obj02)

// -------------------------------------
// lexical scoping and Closures
// ---lexical scoping
// function outerFunc() {
//     // const valueOuter = 12
//     // var globalValue = 40
//     innerFunc01()
//     innerFunc02()
//     function innerFunc01() {
//         // var globalValue = 50
//         // console.log(valueInner01)
//         // const valueInner01 = 8
//         // console.log(valueInner02)
//         // console.log(globalValue)
//     }
//     function innerFunc02() {
//         // console.log(globalValue)
//         // const valueInner02 = 8
//         // console.log(valueInner01)
//         // console.log(valueOuter)
//     }
//     // console.log(valueInner01)
// }
// outerFunc()

// --- Closures
// function closuerFunc() {
//     let value = 1
//     function sumVal() {
//         value += 1 
//         console.log(value)
//     }
//     return sumVal
// }

// const returnedFunc = closuerFunc()
// returnedFunc()

// ----------------------------------- 
// Promises - pending - fulfill - reject

// const reqPromise = new Promise((resolve, reject) => {
//     const randomNum = Math.random() < 0.5 ? 0 : 1
//     console.log(randomNum)
//     setTimeout(() => {
//         if (randomNum === 1) {
//             resolve('promise resolved')
//         }
//         else {
//             reject('promise rejected')
//         }

//     }, 2000);
//     console.log('after time console')
// })



// reqPromise.then((res) => {
//     console.log(res)

// }).catch((err) => {
//         console.log(err)

// })

// ------------------------------ 
// Callbacks   
// function callBackFunc(name, callback) {
//     console.log(name)
//     callback(name)
// }

// function greet(name){
//     console.log(`hello ${name}`)
// }
// callBackFunc('Ahmed', greet)

// setTimeout(()=> {
//     console.log('time is a callback')
// }, 2000)