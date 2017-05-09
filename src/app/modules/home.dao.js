var mongo = require('mongodb');

var homeDao = {
    insertEmployeeDetails: insertEmployeeDetails,
    // deleteEmployee:deleteEmployee,
    // updateEmployee:updateEmployee,
    // getEmployee:getEmployee
}

function insertEmployeeDetails() {
console.log("in home dao");
    var Mclient = mongo.MongoClient;
    var url = 'mongodb://anusha740:dbpassword@ds129030.mlab.com:29030/employeedirectory_anusha';
    Mclient.connect(url, function (err, db) {
        if (err) {
            console.log("error occured while connecting", err);
        } else {
            console.log("connected successfully", db);
        }
    });

}
module.exports = homeService;