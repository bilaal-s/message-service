"use strict";
const http = require('http');
const fs = require('fs');

const messageId = {
    "id": 1
}

function incrementor() {
    messageId.id = messageId.id + 1;
}

let messageLib = [];

const server = http.createServer(function(request, response) {
    let headers = request.headers;
    let method = request.method;
    let url = request.url;
    let body = [];


    if (method === "POST" && url === "/messages/") {

        request.on('error', function(err) {
            console.error(err);
        }).on('data', function(chunk) {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();

            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });

            response.end('{"id":' + messageId.id + '}', "utf8", function callback() {
                fs.mkdir("messages", function callback() {
                    fs.writeFile("messages/" + messageId.id + ".txt", body, "utf8")
                    messageLib.push(messageId.id);
                    incrementor();
                })
            })

        });
    } else if (method === "GET" && url === "/messages/" + messageLib[url.slice(10) - 1]) {

        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        fs.readFile("messages/" + messageLib[url.slice(10) - 1] + ".txt", "utf8", function(err, data) {
            response.end(data, 'utf8')
        });

    }

}).listen(1337, '127.0.0.1');
