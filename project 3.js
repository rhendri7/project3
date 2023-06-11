/* 
CIT 281 Project 3 server RJ Hendrix */

const fs = require('fs');
const fastify = require("fastify")();
const { coinCount } = require('./p3-module');

fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) { 
            reply.code(500);
            console.log(err);
        }
        reply
            .code(200)
            .header('Content-Type', 'text/html')
            .send(data)
            console.log("URL: ", request.url)
    });
});

fastify.get("/coin", (request, reply) => {

    const{ denom = 0, count = 0 } = request.query
    const coinValue = coinCount({ denom, count})
    reply  
        .code(200)
        .header('Content-Type', 'text/html')
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}<h2><br /><a href="/">Home</a>`)
});

fastify.get("/coins", (request, reply) => {
const coinValueOption = (option) => {
    switch(option){
        case '1':
            result = coinCount({denom: 5, count: 3 }, {denom: 10, count: 2})
            break;
        case '2':
            coins = ({denom: 25, count: 2}, {denom: 1, count: 7})
            result = coinCount(...coins)
            break;
        case '3':
            coins = ({denom: 25, count: 2}, {denom: 1, count: 7})
            result = coinCount(coins)
            break;
        default:
            result = 0
            break;
    }
    return result;
}
const option = request.query.option
coinValue = coinValueOption(option)
reply  
    .code(200)
    .header('Content-Type', 'text/html')
    .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
});

const listenPort = 8080;
const listenIP = "localhost";
fastify.listen(listenPort, listenIP, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`);
});