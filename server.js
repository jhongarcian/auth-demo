
// npm i express to get the dependency
const express = require("express");
// Running on port 8080.
const PORT = 8080;

// Server with express.
const server = express();

// Endpoint created.
server.get("/heartbeat", (req, res) => {
	res.json({"is":"working", "status":"good"});
});

server.listen(PORT, () => {
	console.log(`The server is running at PORT ${PORT}`)
})
