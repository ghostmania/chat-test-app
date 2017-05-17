angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, $state, intervalService) {

    $scope.logOut = function () {
        intervalService.stop();
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
