// var model = require('./models/model');

// function addEmployee(res) {

//     model.find(function (err, data) {
//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err) {
//             res.send(err);
//         }

//         res.json(data); // return all todos in JSON format
//     });
// };

var module = { exports: {} };

module.exports = function (app) {


    app.post('/api/todos', function (req, res) {
        console.log("in post request");
        // create a todo, information comes from AJAX request from Angular
        // // Todo.create({
        // //     text: req.body.text,
        // //     done: false
        // // }, function (err, todo) {
        // //     if (err)
        // //         res.send(err);

        // //     // get and return all the todos after you create another
        // //     getTodos(res);
        // });

    });
};
