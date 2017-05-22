(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController($state, intervalService) {
    var vm = this;
    vm.logOut = function () {
        intervalService.stop();
        intervalService.messages = [];
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
})();
