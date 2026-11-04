const http = require("http");
const server = http.createServer((req, res) => {
    res.end("jesus loves me");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("server listening on 3k port");
});
