(function() {
    'use strict';

    angular.
    module('myApp')
    .component('login', {
        templateUrl: './src/login.component.html',
        controller: function loginController($scope, $state) {
            $scope.usersInput = this.value;
            $scope.userLogin = function() {
                if ($scope.usersInput){
                    localStorage.setItem('currentUser', $scope.usersInput);
                    $state.go('chat');
                }
            }
        }
    });
})();
