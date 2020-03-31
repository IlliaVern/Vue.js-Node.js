const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, req.url==="/" ? 'home.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath+='.html'
    }

    fs.readFile(filePath, (err, content)=>{
        if(err) {
            fs.readFile(path.join(__dirname, 'error.html'), (err, data)=>{
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type':'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type':contentType
            })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`);

})