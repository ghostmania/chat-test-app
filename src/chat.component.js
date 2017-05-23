(function() {
    'use strict';

    angular
    .module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: chatController,
        controllerAs: 'chatController'
    });

function chatController($timeout, intervalService) {
    document.getElementById('messageArea').focus();
    var vm = this;
    vm.username = localStorage.getItem('currentUser');
    vm.messages = intervalService.messages;
    vm.message = this.value;
    vm.scrollToBottom = false;
    vm.sendMsg = sendMsg;
    intervalService.start();

    function sendMsg() {
        if (vm.message && localStorage.getItem('currentUser')) {
            vm.scrollToBottom = true;
            var msg = {
                author: localStorage.getItem('currentUser'),
                time: new Date(),
                content: vm.message
            };
            vm.messages.push(msg);
            vm.message = "";
            intervalService.audio.play();
            $timeout(function(){
                vm.scrollToBottom = false
            } , 2000);

        }
        document.getElementById('messageArea').focus();
    }

}
})();
