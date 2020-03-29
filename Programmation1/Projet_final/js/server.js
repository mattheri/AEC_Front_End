const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/:media/:folder/:letter", (req, res, next) => {
    const path = `../${req.params.media}/${req.params.folder}/${req.params.letter}/`;
    const files = fs.readdirSync(path, (err, files) => {
        if (err) console.log(err);
    });
    const numberOfImages = files.length - 1;
    const response = JSON.stringify(numberOfImages);
    res.send(response);
});
app.listen(PORT, (req, res) => console.log(`Server listening on port ${PORT}.`));