angular.
    module('myApp')
    .component('login', {
        templateUrl: './src/login.component.html',
        controller: function loginController($scope) {
            console.log('loginController loaded');
            $scope.usersInput = this.value;
            $scope.userLogin = function() {
                if ($scope.usersInput){
                    console.log('Current user is', $scope.usersInput);
                    localStorage.setItem('currentUser', JSON.stringify($scope.usersInput));
                }
            }
        }
    });
