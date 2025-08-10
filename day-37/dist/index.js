"use strict";
// const a:number = 1
// let b:number = 2
Object.defineProperty(exports, "__esModule", { value: true });
const orderObj = {
    name: '---',
    price: 20,
    user: {
        username: 'john',
        age: 20,
        email: 'mail@mail.com',
        address: '----'
    },
    timestamp: '22-02-2025:05:56:00',
    isDelivered: false
};
console.log(orderObj);
const func = (num) => {
    return !!num;
};
console.log(func(2));
