projectData = {};
const port = 8000;


function listening() {
    console.log("Server is running on local host:" + port);
}

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

const server = app.listen(port, listening);


app.get('/get', function (req, res) {
    res.send(projectData);
    console.log("project data:", projectData);
});
app.post('/post', function (req, res) {
    let data = {
        temp: req.body.temp,
        date: req.body.date,
        userResponse: req.body.userResponse,
    }
    projectData = data;
    res.send(projectData);
});

