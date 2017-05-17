angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, $state) {

    $scope.logOut = function () {
        localStorage.setItem('currentUser', "");
        $state.go('login');
        console.log('Logged Out');
    }
}


