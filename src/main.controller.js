(function() {
    'use strict';

    angular
    .module('myApp')
    .controller('MainController', MainController);

function MainController(mainControllerService) {
    this.logOut = function () {
        mainControllerService.logOut();
    }
}
})();
