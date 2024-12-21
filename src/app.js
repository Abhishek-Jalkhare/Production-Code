// iss file mein express ke logics
// express mein jo routes ki callback hoti hai woh controller khte hai
// aur controller aur route ek folder mein nhi hote hai
// this is architecture of express  is called soa (service oriented architecture)   

// ismein sirf middlewares setup aur error handling krte hai  
// error handling ki 1 layer server.js 2 layr app.js 3 layer controller pe

const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');

app.use('/', indexRoutes);  




module.exports = app;   
