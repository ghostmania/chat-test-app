(function() {
    'use strict';

    angular
    .module('myApp')
    .component('login', {
        templateUrl: './app/components/login.component.html',
        controller: loginController,
        controllerAs: 'loginController'
    });

function loginController(authService) {
    var vm = this;
    vm.usersInput = "";
    vm.userLogin = userLogin;
    vm.checkLoginState = checkLoginState;

    //functions
    function userLogin() {
        authService.userLogin(vm.usersInput);
    }

    function checkLoginState() {
        authService.checkLoginState();
    }

}
})();
