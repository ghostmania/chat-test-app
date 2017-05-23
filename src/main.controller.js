(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController(authService) {
    var vm = this;
    vm.logOut = logOut;

    //functions
    function logOut() {
        authService.logOut();
    }
}
})();
