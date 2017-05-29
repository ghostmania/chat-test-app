(function () {
    'use strict';

    angular
        .module("myApp")
        .service("authService", authService);

function authService($state, chatService) {
        var vm = this;
        vm.userLogin = userLogin;
        vm.logOut = logOut;
        vm.testAPI = testAPI;
        vm.statusChangeCallback = statusChangeCallback;
        vm.checkLoginState = checkLoginState;

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

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            vm.testAPI();
        } else {
            console.log('The person is not logged into your app or we are unable to tell.')
        }
    }

    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            vm.statusChangeCallback(response);
        });
    }

    function testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log(response);
            console.log('Successful login for: ' + response.name);
            console.log(response.email)
        },
            {
                scope: 'email'
            }

        );
    }


}
})();