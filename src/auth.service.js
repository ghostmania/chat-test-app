(function () {
    'use strict';

    angular
        .module("myApp")
        .service("authService", authService);

function authService($state, chatService) {
        var vm = this;
        vm.userLogin = userLogin;
        vm.logOut = logOut;

        //functions
        function userLogin(userInput) {
            if (userInput){
                localStorage.setItem('currentUser', userInput);
                $state.go('chat');
            }
        }

        function logOut() {
            chatService.stop();
            chatService.messages = [];
            localStorage.setItem('currentUser', "");
            $state.go('login');
        }
}
})();