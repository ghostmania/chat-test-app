angular
    .module('myApp')
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('blue', 'default')
            .primaryPalette('blue')
    })
    .controller('MainController', MainController);

function MainController($scope, $state, intervalService) {
    $scope.test11 = document.getElementById('chatArea');
    $scope.logOut = function () {
        intervalService.stop();
        intervalService.messages = [];
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
