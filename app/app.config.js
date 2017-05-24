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

                    /*
                     The app id of the web app;
                     To register a new app visit Facebook App Dashboard
                     ( https://developers.facebook.com/apps/ )
                     */

                    appId: '228869647612730',

                    /*
                     Adding a Channel File improves the performance
                     of the javascript SDK, by addressing issues
                     with cross-domain communication in certain browsers.
                     */

                    channelUrl: './channel.html',

                    /*
                     Set if you want to check the authentication status
                     at the start up of the app
                     */

                    status: true,

                    /*
                     Enable cookies to allow the server to access
                     the session
                     */

                    cookie: true,

                    /* Parse XFBML */

                    xfbml: true
                });

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
