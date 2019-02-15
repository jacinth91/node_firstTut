const http = require('http');

const server=http.createServer((req,res)=>{
if(req.url === '/'){

    res.write('hello world');
    res.end();
}
if(req.url === '/api/courses'){

res.write(JSON.stringify([11,2,3,4]));
res.end();

}
});

server.listen(3000);

console.log('listening to posrt 3000');