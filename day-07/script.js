// synchronous & asynchronous

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//     })
//     .catch((err) => console.log(err))


// async await ---
// const asyncFunc = async () => {
//     const dataJson = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const resData = await dataJson.json()
//     console.log(resData)
// }

// async function asyncFunc() {
//     try {
//         const dataJson = await fetch('https://jsonplaceholder.typicode.com/todos')
//         // console.log(dataJson)
//         const resData = await dataJson.json()
//         console.log(resData)
//     }
//     catch (err) {
//         console.log('an error occured!', err)
//     }
// }

// asyncFunc()


// CJS & MJS  - Modules (import/export)
//  CJS - Common JS - require('./addToCart') 

// import addToCart from './addToCart.js'

// addToCart('this item')

// import {login, signUp} from './auth.js'

// const userData = {
//     username:'user001',
//     password:'123456789'
// }

// // login(userData)
// signUp(userData)

