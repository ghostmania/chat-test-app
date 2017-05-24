(function () {
    'use strict';

    angular
        .module("myApp")
        .service("authService", authService);

function authService($state, chatService, $rootScope) {
        var vm = this;
        vm.userLogin = userLogin;
        vm.logOut = logOut;
        vm.watchLoginChange = watchLoginChange;
        vm.getUserInfo = getUserInfo;

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

        function watchLoginChange() {

            // var _self = this;

            FB.Event.subscribe('auth.authResponseChange', function(res) {

                if (res.status === 'connected') {

                    console.log('The user is already logged, is possible retrieve his personal info')
                    vm.getUserInfo();
                    console.log(res.authResponse)

                }
                else {
                    console.log('The user is not logged to the app, or into Facebook: destroy the session on the server.')
                }

            });
        }

        function getUserInfo() {

            var _self = this;

            FB.api('/me', function(res) {
                $rootScope.$apply(function() {
                    $rootScope.user = _self.user = res;
                });
            });

        }
}
})();