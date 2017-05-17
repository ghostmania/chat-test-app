angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($scope, $state, intervalService) {
    $state.go('login');

    $scope.logOut = function () {
        intervalService.stop();
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
