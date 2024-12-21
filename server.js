// iss file mein server start aur db se connection hogi
// jo pehle se install rhta woh module hote hai eg http
// jo pehle se install nhi rhta woh package hote eg express

const app = require('./src/app');
const http = require('http');

const server = http.createServer(app);   // aisa isliye kiya hhtp pe jo req jati hai woh app mein jata hai  
// http se jo server bnate hai woh raw form mein bnata hai  
// for eg socket io http wale pe chl jata pr express wale pe nhi chl jata   
// http wale server se bhut saare package interact kr skte hai in comparison to express 

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

