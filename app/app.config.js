(function() {
    'use strict';

    angular
    .module('myApp')
    .config(config)
    .run(['$rootScope', '$window', 'authService',
        function($rootScope, $window, authService) {

            $rootScope.user = {};

            $window.fbAsyncInit = function() {
                // Executed when the SDK is loaded

                FB.init({

                    appId: '228869647612730',
                    status: true,
                    cookie: true,
                    channelUrl: './src/channel.html',
                    xfbml: true
                });
                // authService.statusChangeCallback();
                authService.watchLoginChange();
            };
            (function(d){
                // load the Facebook javascript SDK

                var js,
                    id = 'facebook-jssdk',
                    ref = d.getElementsByTagName('script')[0];

                if (d.getElementById(id)) {
                    return;
                }

                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/en_US/all.js";

                ref.parentNode.insertBefore(js, ref);

            }(document));

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
