(function () {
    'use strict';

    angular
    .module("myApp")
    .service("mainControllerService", mainControllerService);

function mainControllerService($state, chatService) {
    var vm = this;
    vm.logOut = logOut;

    function logOut() {
        chatService.stop();
        chatService.messages = [];
        // chatService.username = "";
        localStorage.setItem('currentUser', "");
        $state.go('login');
    }
}
})();