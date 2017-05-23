(function () {
    'use strict';

    angular
        .module("myApp")
        .service("authService", authService);

    function authService($state) {
        var vm = this;
        vm.userLogin = userLogin;

        //functions
        function userLogin(userInput) {
            if (userInput){
                localStorage.setItem('currentUser', userInput);
                $state.go('chat');
            }
        }
    }
})();