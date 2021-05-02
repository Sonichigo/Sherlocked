const express = require('express');
const path = require('path');

const app = express();
const port = 12345;

app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/login', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/login.html'));
});

app.get('/flash', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/level1.html'));
});

app.get('/binary', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/level2.html'));
});

app.get('/ruler', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/level3.html'));
});

app.get('/greenheart', (request,response) => {
    response.sendFile(path.join(__dirname,'/public/level4.html'));
});

app.listen(port , () => {
    console.log("Listening on express server ",port);
});