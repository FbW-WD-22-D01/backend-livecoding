const http = require("http");


const options = {
    host:'www.google.com',
    path:'/bla',
    method: "GET"
}

const callback = (response) => {
    let str = '';

    response.on('data', (chunk) => {
        console.log(chunk)
        str += chunk;
    });

    response.on('end', () => {
        console.log(str);
    });

}


http.request(options, callback).on('error', (error) => {
console.log(error);
}).end();
