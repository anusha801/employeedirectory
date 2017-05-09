(function () {
    'use strict';
    angular
        .module('employeedirectory')
        .service('homeService', ['$http', '$q', homeService]);


    function homeService($http, $q) {

        var service = {};
        var employee;

        service.addEmployee = function (details) {
            console.log("in home service", details);
            return $http.post('/addEmployee', details).then(function (response) {
                console.log("in service", response);

            });

        };
        service.editEmployee = function (id) {
            var deferred = $q.defer();

            console.log("in home serviceedit", id);
            $http.get('/editEmployee/' + id).then(function (response) {
                employee = response.data;
                console.log("respones", employee);
                deferred.resolve(employee);

            });
            console.log(deferred.promise, "in service");

            return deferred.promise;
        };

        return service;

        service.getEmployee = function () {
            console.log("in get employee");
            return $http.get('/').then(function (response) {
                console.log("got gret req");
                $scope.employees = response
            });
        };
        return service;

        service.updateEmployee = function (id, employee) {
            console.log("in get employee");
            return $http.get('/updateEmployee/' + id, employee).then(function (response) {
                console.log("got gret req");

            });
        };
        return service;



        service.removeEmployee = function (id) {
            console.log(id);
            //    return $http.delete('/' + id).then(function (response) {
            //        console.log("got remove req");
            //     });
        };
        return service;
    };
})();