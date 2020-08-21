const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send( 'hello world' )
});

app.use(express.static("static"));

app.listen(5000, function() {
    console.log("It works!")
});