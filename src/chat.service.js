(function () {
    'use strict';

    angular
        .module("myApp")
        .service("chatService", chatService);

function chatService($interval, usersMessagesConst) {
        var vm = this;
        vm.messages = [];
        vm.sendMsg = sendMsg;
        vm.audio = new Audio('./src/chatSound.mp3');
        vm.messages = [];
        vm.simulateUsers = simulateUsers;
        vm.randomTime = randomTime;
        vm.start = start;
        vm.stop = stop;

        //functions
        function simulateUsers() {
            var randomMsg = usersMessagesConst.messages[Math.floor(Math.random() * 3)];
            vm.messages.push({
                "author" : randomMsg.author,
                "time" : new Date(),
                "content": randomMsg.content
            });
            // vm.audio.play();
        }

        function randomTime() {
            return (Math.floor(Math.random() * 3)+3)*1000;
        }

        function start() {
            vm.interval = $interval( vm.simulateUsers,  vm.randomTime());
        }

        function stop() {
            $interval.cancel(vm.interval);
        }

        function sendMsg(message, username) {
            if (message && username) {
                var msg = {
                    author: username,
                    time: new Date(),
                    content: message
                };
                vm.messages.push(msg);
            }
            document.getElementById('messageArea').focus();
        }
}
})();