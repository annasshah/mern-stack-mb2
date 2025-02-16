// var a = undefined
// console.log(a)

// console.log('hello world!')

// var num = '1'
// var num2 = 2

// console.log(typeof num)

// var num = 10 
// num = num + 5
// num += 5

// num *= 5
// console.log(num)


// types in javascript
// number
// string
// boolean
// null
// undefined

// non primitive datatype
// object

// var a = 3
// var b = a
// a = 4

// console.log('a--->',a)
// console.log('b--->',b)


// Object datatype refers to
// array
// object 
// functions

// var obj = {
//     class: 1,
//     section: 'B'
// }

// var obj_01 = obj
// console.log('obj--->', obj)
// obj.section = 'C'

// console.log('obj_01', obj_01)

// var arr = ['a','b','c', 'd']
// console.log(arr[1])

// Operators
// = assignment operator
// == condition checking -- without checking datatype
// === condition checking -- with verfy the datatype too

// var a = 1
// var b = '1'

// if (a === b) {
//     console.log('matched!')
// }
// else console.log('not matched')


// what is the difference in b/w 
// null
// undefined

// console.log(a)
// var a = 3
// console.log(a)
// var b = null
// console.log(b)




// var a = 1
// var a = 2



// console.log(a)


// let and const 
// var a = 4
// var a = 10
// a = 14


// let b = 5

// b = 15
// console.log(b)

// {
//     // let b = 10
//     console.log(b)
// }
// const c = 3.14
// // const c = 10 
// c = 10
// console.log(c)


// console.log(a)
// const a = 3

// console.log(b)
// let b = 5

// console.log(a)
// var a = 4



function sum(num) {
    return num * 10
}

const num1 = 20

const objNumber = {
    num1: 30
}

objNumber.num1 = 3
console.log(sum(objNumber.num1))
