(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController(authService) {
    var vm = this;
    vm.logOut = logOut;
    vm.FB = FB;
    vm.getUserInfo = getUserInfo;

    //functions
    function logOut() {
        authService.logOut();
    }

    function FB() {
        authService.watchLoginChange();
    }

    function getUserInfo() {
        authService.getUserInfo();
    }
}
})();
