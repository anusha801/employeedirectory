var express = require('express');
var app = express();
var configObj = require("./src/config/config");
configObj.setEnv(process.argv[2]);
var config = configObj.props();
var PORT = config.app.port;
var bodyparser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('empdirectory', ['empdirectory']);
app.use(express.static(__dirname + '/src/app/modules'));
app.use(express.static(__dirname + '/src/app/css'));
app.use(bodyparser.json());
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/src/app/modules/home.html');
});
app.post('/addEmployee', function (req, res) {
    console.log("I recieved a post request");
    console.log(req.body);
    db.empdirectory.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});

app.get('/getEmployee', function (req, res) {
    console.log("I recieved get request");
    db.empdirectory.find(function (err, docs) {
        console.log(docs);
        res.json(docs);

    });
});
app.get('/editEmployee/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.empdirectory.findOne({
        _id: mongojs.ObjectId(id)
    }, function (err, doc) {
        res.json(doc);
    });
});
app.delete('/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.empdirectory.remove({
        _id: mongojs.ObjectId(id)
    }, function (err, doc) {
        res.json(doc);
    });
});
app.put('/updateEmployee/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.empdirectory.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                name: req.body.name,
                email: req.body.email,
                number: req.body.number
            }
        },
        new: true
    }, function (err, doc) {
        res.json(doc);
    });
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT + '!');
});