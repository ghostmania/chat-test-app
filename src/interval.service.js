(function() {
    'use strict';

    angular
    .module("myApp")
    .service('intervalService', intervalService);

function intervalService($interval, usersMessagesConst) {
    var _this = this;
    this.audio = new Audio('./src/chatSound.mp3');
    this.messages = [];
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

     this.start = function () {
         _this.interval = $interval( simulateUsers,  randomTime());
     };

    this.stop = function () {
        $interval.cancel(_this.interval);
    }

}
})();
