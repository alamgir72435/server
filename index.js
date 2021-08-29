const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
	res.send(
		`<h1>Server running on </h1> <br/><hr/>${JSON.stringify(process.env)}`
	);
});

const posts = [];

app.get("/post", (req, res) => {
	res.json(posts);
});

app.post("/post", (req, res) => {
	posts.push(req.body);
	res.send(req.body);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`server Running on port ${PORT}`));
