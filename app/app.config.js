(function() {
    'use strict';

    angular
    .module('myApp')
    .config(config)
    .run(['$rootScope', '$window', 'authService',
        function($rootScope, $window, authService) {
            $window.fbAsyncInit = function() {
                // Executed when the SDK is loaded

                FB.init({

                    appId: '228869647612730',
                    status: true,
                    cookie: true,
                    channelUrl: './channel.html',
                    xfbml: true,
                    version    : 'v2.8'
                });
                // authService.statusChangeCallback();
                FB.getLoginStatus(function(response) {
                    authService.statusChangeCallback(response);
                });
            };
            // Load the SDK asynchronously
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        }]);

function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/login");
    $mdThemingProvider
        .theme('blue', 'default')
        .primaryPalette('blue');
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            component: 'login',
            resolve: {
                login: checkUser
            }
        })
        .state({
            name: 'chat',
            url: '/',
            component: 'chat',
            resolve: {
                chat: getuser
            }
        })
}

function getuser($state) {
    var user = localStorage.getItem('currentUser');
    if (!user) {
        return $state.go('login')
    }
}

function checkUser($state) {
    var user = localStorage.getItem('currentUser');
    if (user) {
        alert('Already logged in');
        return $state.go('chat')
    }
}

})();
