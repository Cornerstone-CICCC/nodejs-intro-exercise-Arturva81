"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    var _a;
    const url = (_a = req.url) !== null && _a !== void 0 ? _a : "/";
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home</h1>");
        return;
    }
    if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
        return;
    }
    if (url === "/my-account") {
        res.writeHead(403, { "Content-Type": "text/plain" });
        res.end("You have no access to this page");
        return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
