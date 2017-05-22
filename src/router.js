(function() {
    'use strict';

    angular
    .module('myApp')
    .config(config);

function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise("/login");
    $mdThemingProvider.theme('blue', 'default')
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
        alert('Already loggen in');
        return $state.go('chat')
    }
}
})();
