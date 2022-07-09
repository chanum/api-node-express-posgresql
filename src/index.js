const PORT = 4000;

const express = require("express");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes 
app.use(require("./routes/index"));

app.listen(PORT);
console.log("Server on port ", PORT);

