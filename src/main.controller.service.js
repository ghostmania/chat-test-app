(function () {
    'use strict';

    angular
    .module("myApp")
    .service("mainControllerService", mainControllerService);

function mainControllerService($state, intervalService) {
    var vm = this;
    vm.logOut = logOut;

    function logOut() {
        intervalService.stop();
        intervalService.messages = [];
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
})();