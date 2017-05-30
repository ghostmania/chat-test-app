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
        // vm.logoutFB = logoutFB;

    //functions
        function userLogin(userInput, userEmail) {
            if (userInput){
                localStorage.setItem('currentUser', userInput);
                localStorage.setItem('currentEmail', userEmail);
                $state.go('chat');
            }
        }

        function logOut() {
            chatService.stop();
            chatService.messages = [];
            localStorage.setItem('currentUser', "");
            localStorage.setItem('currentEmail', "");
            // vm.logoutFB();
            $state.go('login');
        }

    //FB authorization
         function watchLoginChange() {


            FB.Event.subscribe('auth.authResponseChange', function(res) {

                if (res.status === 'connected') {

                    /*
                     The user is already logged,
                     is possible retrieve his personal info
                     */
                    console.log(' The user is already logged, is possible retrieve his personal info')
                    vm.getUserInfo();
                    console.log(vm.user);
                    if (vm.user) {
                        vm.userLogin(vm.user.name, vm.user.email)
                    }

                    /*
                     This is also the point where you should create a
                     session for the current user.
                     For this purpose you can use the data inside the
                     res.authResponse object.
                     */

                }
                else {
                    console.log('The user is not logged to the app, or into Facebook: destroy the session on the server.')
                    /*
                     The user is not logged to the app, or into Facebook:
                     destroy the session on the server.
                     */

                }

            });

        }

         function getUserInfo() {


            FB.api('/me?fields=name,email', function(res) {
                $rootScope.$apply(function() {
                    $rootScope.user = vm.user = res;
                });
            },
                {
                    scope: 'email'
                }
            );

        }

         function logoutFB() {

            FB.logout(function(response) {
                $rootScope.$apply(function() {
                    $rootScope.user = vm.user = {};
                });
            });

         }


}
})();