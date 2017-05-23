(function() {
    'use strict';

    angular
    .module('myApp')
    .component('login', {
        templateUrl: './src/login.component.html',
        controller: loginController,
        controllerAs: 'loginController'
    });

function loginController($state) {
    var vm = this;
    vm.usersInput = "";
    vm.userLogin = userLogin;

    function userLogin() {
        if (vm.usersInput){
            localStorage.setItem('currentUser', vm.usersInput);
            $state.go('chat');
        }
    }


}
})();
