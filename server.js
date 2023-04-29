
// npm i express to get the dependency
const express = require("express");
const { checkAuth } = require('./middleware');
// Running on port 8080.
const PORT = 8080;

// Server with express.
const server = express();
server.use(express.json());
server.use(checkAuth);

// Endpoint created.
server.get("/heartbeat", (req, res) => {
	res.json({"is":"working", "status":"good"});
});

server.post('/auth/login', (req, res) => {
	res.send(`${req.body.username}, ${req.body.password}`)
});

server.listen(PORT, () => {
	console.log(`The server is running at PORT ${PORT}`)
});
