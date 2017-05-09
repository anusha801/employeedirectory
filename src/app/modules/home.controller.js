(function () {
    'use strict';

    angular.module('employeedirectory', [])
        .controller('homeController', ['homeService', '$scope', '$http', homeController]);

    function homeController(homeService, $scope, $http) {
        var refresh = function () {
            $http.get('/getEmployee').then(function (response) {
                console.log("I got the data I requested", response);
                $scope.employees = response.data
                $scope.employee = {};
            });
        };
        refresh();

        $scope.addEmployee = function () {
            var dob = $scope.employee.dob;
            //  var dob = details.dob;
            var splitteddob =dob.split('-');
            console.log(parseInt(splitteddob));
            var age = new Date().getFullYear() - parseInt(splitteddob);
            console.log(typeof age);
            $scope.employee.age = age;

            console.log("in add employee", $scope.employee);
            homeService.addEmployee($scope.employee);
            refresh();

        };
        $scope.removeEmployee = function (id) {
            console.log("in remove employee");
            // homeService.removeEmployee(id);
            return $http.delete('/' + id).then(function (response) {
                console.log("got remove req");
                refresh();
            });
        };

        $scope.editEmployee = function (id) {
            var emp = homeService.editEmployee(id).then(function (emp) {
                $scope.employee = emp;
                console.log(emp);
            });

        };
        $scope.updateEmployee = function () {
            console.log($scope.employee._id);
            return $http.put('/updateEmployee/' + $scope.employee._id, $scope.employee).then(function (response) {
                console.log("got gret req");
                refresh();

            });
        }
        $scope.getEmployee = function () {
            console.log("in get employee");
            homeService.getEmployee();

            refresh();
        };
    };
})();