// setTimeout(()=>{
//     // 1 
//     console.log('Exection from timeout function')
// }, 2000)

// // 2
// console.log('Hello Javascript')




// setTimeout(()=>{
//     // 1 
//     console.log('Exection from timeout function')
// }, 1000)

// // 2
// console.log('Hello Javascript')




// setTimeout(()=>{
//     // 1 
//     console.log('1')
// }, 0)

// // 2
// console.log('2')



// setTimeout(()=>{
//     console.log('timeout - 1')
// }, 0)


// setImmediate(()=>{
//     console.log('immediate callback - 2')
// })

// console.log('top level - 3')



import { createServer } from 'http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\nfrom the http server');
// });

const server = createServer((req, res) => {
    const requestType = req.method
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (requestType) {
        case 'GET':
            res.end('This is Get Request Response');
            break;
        case 'POST':
            // const data = req.body
            // console.log('data', data)
            res.end('This is POST Request Response');
            break;
        case 'PUT':
            res.end('This is PUT Request Response');
            break;
        case 'DELETE':
            res.end('This is DELETE Request Response');
            break;

        default:
            res.end('Returning default');
            break;
    }
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});


// const name:string = 'Arsal'

// 3000/products

