(function() {
    'use strict';

    angular
    .module("myApp")
    .service('intervalService', intervalService);

function intervalService($interval, usersMessagesConst) {
    var _this = this;
    this.audio = new Audio('./src/chatSound.mp3');
    this.messages = [];
    this.chatHeight =
    this.simulateUsers = simulateUsers;
    this.randomTime = randomTime;
    this.start = start1;
    this.stop = stop;

    function simulateUsers() {
        var randomMsg = usersMessagesConst.messages[Math.floor(Math.random() * 3)];
        _this.messages.push({
            "author" : randomMsg.author,
            "time" : new Date(),
            "content": randomMsg.content
        });
        _this.audio.play();
    }

    function randomTime() {
        return (Math.floor(Math.random() * 3)+3)*1000;
    }

    function start1() {
        _this.interval = $interval( _this.simulateUsers,  _this.randomTime());
    }

    function stop() {
        $interval.cancel(_this.interval);
    }
}
})();

//todo
// 1) scroll to bottom if scroll at the bottom before element is added
//