(function() {
    'use strict';

    angular
    .module('myApp')
    .component('login', {
        templateUrl: './src/login.component.html',
        controller: loginController,
        controllerAs: 'loginController'
    });

function loginController(authService) {
    var vm = this;
    vm.usersInput = "";
    vm.userLogin = userLogin;

    //functions
    function userLogin() {
        authService.userLogin(vm.usersInput);
    }

}
})();
