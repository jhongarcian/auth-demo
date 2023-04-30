
// npm i express to get the dependency
const express = require("express");
const { checkAuth } = require('./middleware');
const pgp = require('pg-promise')();

// Running on port 8080.
const PORT = 8080;

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'users',
    user: 'jhongarcian',
    password: '',
    allowExitOnIdle: true
}

const db =pgp(cn);

// Server with express.
const server = express();
server.use(express.json());
// server.use(checkAuth);

// Endpoint created.
server.get("/heartbeat", (req, res) => {
	res.json({"is":"working", "status":"good"});
});

server.get("/test", async (req, res) => {
	const user = await test();
	res.json(user)
});

async function test() {
	const user = await db.any('SELECT * FROM userAuth', [true]);
	return user
}

server.post('/auth/login', (req, res) => {
	res.send(`${req.body.username}, ${req.body.password}`)
});

server.listen(PORT, () => {
	console.log(`The server is running at PORT ${PORT}`)
});
