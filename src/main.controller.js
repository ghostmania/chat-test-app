angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, $state, $interval) {

    $scope.logOut = function () {
        // $interval.cancel(intervall);
        localStorage.setItem('currentUser', "");
        $state.go('login');
        console.log('Logged Out');
    }
}
