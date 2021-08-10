
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /*
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public','index.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(content);
        })
//        res.writeHead(200,{'Content-Type': 'text/html'});
//        res.end('<h1>Home</h1>');
    }
    if(req.url === '/api/users'){
       
        const users = [
            {name:'Sarmad', age:2},
            {name:'Saad', age:1}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));

    }
    */
    
    //Built File Path
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html':req.url
    );

    let extname = path.extname(filePath);
    
    let contentType = 'text/html';
    
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
            
    }
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            }else{
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            res.writeHead(200, {'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
//const person = require('./person');
//console.log(person.age);
