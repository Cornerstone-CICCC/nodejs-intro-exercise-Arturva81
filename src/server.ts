import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
	const url = req.url ?? "/";

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
