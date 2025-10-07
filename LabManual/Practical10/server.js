const express = require('express');
const homeRoute = require('./home');

const app = express();
const PORT = 5000;

app.use('/', homeRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/home`);
});