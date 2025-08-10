// const a:number = 1
// let b:number = 2

// let sum:number  = a + b


// const a:number = 1
// let b:string = "2"

// let sum:string  = a + b



// const a = 1
// // const b = '123'

// const sum = a + 6


// const user = {
//     username: '---',
//     email: '---',
//     phone: '',
//     address: '--'
// }

// console.log(user)

// const arr = []

// const obj = {
// }




// const calcListFunc = (numbers:number[]) => {

//     return numbers.reduce((a, b) => a + b, 0)

// }

// const sumOfNumbers = calcListFunc([1,2,3,4,5,6])

// console.log(sumOfNumbers)

// // type alies 
// type ID = number

// const userId: ID = 123


// union type 
// type UserId = number | string
// const userId: UserId = "#123"
// const user2Id: UserId = 123


// interface IUser {
//     username: string;
//     age: number;
//     email: string;
//     address: string;
//     isAdmin?: boolean;
// }

// const user: IUser = {
//     username: '---',
//     age: 12,
//     email: '---',
//     address: '--'
// }






interface IBook {
    name: string;
    price: number;
}

interface IUser {
    username: string;
    age: number;
    email: string;
    address: string;
}

interface IOrder extends IBook {
    user: IUser;
    timestamp: string;
    isDelivered: boolean;
}

const orderObj: IOrder = {
    name: '---',
    price: 20,
    user: {
        username: 'john',
        age: 20,
        email: 'mail@mail.com',
        address: '----'
    },
    timestamp:'22-02-2025:05:56:00',
    isDelivered:false
}

console.log(orderObj)



const func = (num: number): boolean | number =>  {

    return num
}

console.log(func(2))