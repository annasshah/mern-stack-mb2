// pass by value and pass by ref
// const obj = {
//     city: 'karachi',
//     country: 'pakistan'
// }
// const obj01 = {
//     city: 'karachi',
//     nestedObj: obj
// }

// function addValueInObj(objectRef, city ) {
//     // objectRef.nestedObj = {
//     //     city: 'karachi',
//     //     country: 'pakistan'
//     // }
//     objectRef.nestedObj.city = city
//     delete objectRef.nestedObj.country
// }
// addValueInObj(obj01, 'Lahore', 'Pakistan')

// console.log('obj:', obj)
// console.log('obj01:', obj01)

// const name = 'Hassan'
// const name2 = name
// // const userClass = '5'

// // Pass by value
// function updateValue(value, name ) {
//     value = name
//     console.log(value)
// }

// updateValue(name, 'Amir')
// console.log(name)





// Destructuring -- Object

// const name = 'Hassan'
// const userClass = '5'

// const userObj = {
//     name: 'Amir',
//     class: '6',
//     profile:{
//         img:'https://----',
//         fullName: 'Amir Ahmed'
//     }
// }

// const username = 'user001'
// const username2 = username

// const { name,  class: userClass, profile } = userObj
// const {img, fullName} = profile

// const { name,  class: userClass, profile:{fullName} } = userObj
// const userClass = userObj.class

// userObj.profile.fullName = 'Abdul Rehman'
// console.log(fullName)
// profile.img
// profile.fullName
// console.log(userObj)

// console.log(profile.fullName)

// console.log(img, fullName)
// console.log(class)


// Destructuring -- Array

// const arr = [1, 2, '3', true, undefined]

// const [num1] = arr

// console.log(boolVal)

// const userObj = {
//     name: 'Amir',
//     class: '6',
//     arr: [1, 2, '3', true, undefined]
// }
// const { name,  class: userClass, arr: [num1, num2] } = userObj

// console.log('nested arr', num1, num2)



// ----------- Template Literals - concat

// const name = 'Abid'

// const greet = 'hello ' + name + '!'
// const greet = `hello ${name}!`
// console.log(greet)


// function greet(name) {
//     return `hello ${name}!`
// }

// console.log(greet('Abdul Rehman'))


// Ternary Operators - condition check ?:

// const day = 'sunday'
// let message
// if(day === 'sunday'){
//     message = "it's holiday"
// }
// else{
//    message = "it's working day!"
// }
// console.log(message)

// const message = day === 'sunday' ? "it's holiday" : day === 'saturday' ? "it's halfday" : "it's working day!"
// console.log(message)

// const marks = 76 

// const isPassed = marks >= 50 ? true : false
// const grade = marks >= 70 ? 'A' : marks >= 60 ? 'B' : 'C' 