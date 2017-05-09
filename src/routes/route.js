
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