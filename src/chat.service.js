(function () {
    'use strict';

    angular
        .module("myApp")
        .service("chatService", chatService);

    function chatService($timeout, $interval, usersMessagesConst) {
        var vm = this;
        vm.messages = [];
        vm.sendMsg = sendMsg;
        // vm.scrollToBottom = false;
        vm.audio = new Audio('./src/chatSound.mp3');
        vm.messages = [];
        vm.simulateUsers = simulateUsers;
        vm.randomTime = randomTime;
        vm.start = start;
        vm.stop = stop;

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
                // vm.scrollToBottom = true;
                // console.log(vm.scrollToBottom)
                var msg = {
                    author: username,
                    time: new Date(),
                    content: message
                };
                vm.messages.push(msg);
                // vm.audio.play();
                // $timeout(function(){
                //     vm.scrollToBottom = false
                // } , 2000);
                // console.log(vm.scrollToBottom)


            }
            document.getElementById('messageArea').focus();
        }
    }

})();