const http = require("http")
const fs = require("fs")

let PORT = 3000;
const server = http.createServer(function (req, res) {
    fs.readFile("index1.html", function(err, data) {
        if(err) {
            return console.error("File not found");
        }
        
        res.writeHeader(200, {"Content-type": "text/html"});
        res.write(data);
        return res.end();
    })
});

server.listen(PORT);
console.log("Web Server is running on port : http://localhost:" + PORT + "...");