const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileSystem = require('fs');
const signalR = require('@aspnet/signalr');

app.use(bodyParser.json());

app.use((request, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
    fileSystem.readFile('/Users/jagathkumar/PWA/MyPWA/server/response.txt', (err, data) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(data);
        response.end();
    });

});

app.post('/api/save', (request, response) => {
    fileSystem.appendFile('/Users/jagathkumar/PWA/MyPWA/server/data.txt', JSON.stringify(request.body), (sucess, error) => {
        console.log(JSON.stringify(request.body));
        response.send("Sucess");
        response.end();
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server Started and listening on port 8080");
});