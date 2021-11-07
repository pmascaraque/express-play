const express = require("express");
const app = express();

app.post("/", (req, res) => res.send("Hallooooooo!"));

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`));
