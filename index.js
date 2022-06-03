const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.json({
        message: "Mozol and Uglyanitsa for Denis Boiko",
    });

});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});