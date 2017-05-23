(function() {
    'use strict';

    angular
    .module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: chatController,
        controllerAs: 'chatController'
    });

function chatController(chatService, $timeout) {
    var vm = this;
    vm.username = "";
    vm.message = "";
    vm.scrollToBottom = false;
    vm.messages = chatService.messages;
    vm.sendMsg = sendMsg;
    vm.resetName = resetName;
    chatService.start();



    function sendMsg() {
        vm.scrollToBottom = true;
        chatService.sendMsg(vm.message, vm.username);
        vm.message = "";
        $timeout(function(){
            vm.scrollToBottom = false
        } , 500);
    }

    function resetName() {
        vm.username = localStorage.getItem('currentUser');
    }

}
})();
