// functions and methods


// const obj = {

//     name: 'Amir',
//     class:5
// }

// console.log(obj['name'])
// const renderItems = Object.keys(obj)
// for (let index = 0; index < renderItems.length; index++) {
//     const itemKey = renderItems[index];
//     // console.log(itemKey)
//     const value = obj[itemKey]
//     console.log(`Key: ${itemKey} - Value:${value}`)
// }

// Spread Operator  - ... --- Object
// const obj = {
//     name: 'Adnan',
//     class: 3
// }

// const obj_01 = {
//     name: 'Hassan',
//     class: 4
// }

// const mainObj = {
//     ...obj_01,
//     ...obj
// }
// console.log(mainObj)

// const obj02 = {
//     // name: 'Adnan',
//     // class: 3,
//     ...obj,
//     name:'Amir',
//     city: 'Karachi',
//     country: 'Pakistan'
// }
// console.log('obj', obj)

// Spread Operator  - ... --- Array
// const arr1 = [1, 2, 3, 4, 5]
// const arr2 = [6, 7, 8, 9, 0]
// const arr3 = [...arr1, arr2]
// console.log(arr3)



// rest operator - ...

// function func(para1, para2, para3, ...restValues) {
//     console.log(restValues)
//     let sumOfRest = para1 + para2 + para3

//     for (let index = 0; index < restValues.length; index++) {
//         sumOfRest += restValues[index];

//     }
//     return sumOfRest
// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log()


// const obj_01 = {
//     name: 'Hassan',
//     class: 4,
//     city:'Karachi',
//     country: 'Pakistan'
// }

// const {name, country, ...restObj} = obj_01

// console.log(restObj)




// Arrow Function 
// const arrFunc = () => {
//     console.log('this is an arrow function')
// }

// function func(){
//     console.log('this is a normal function')
// }

// // func()
// arrFunc()
