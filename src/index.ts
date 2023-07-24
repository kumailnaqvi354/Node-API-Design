import * as dotenv from 'dotenv'
import app from './server'


dotenv.config();

app.listen(3001, ()=>{
    console.log("hello on the http://localhost:3001");
})


// const http = require("http");

// const server= http.createServer((req, res)=>{
//     if (req.method === 'GET' && req.url === '/'){
//         console.log("Hello From server");
//         res.end();
//     }
// })


// server.listen(3001,() =>{
//     console.log('server on http://localhost:3001');
// });

