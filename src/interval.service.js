angular
    .module("myApp")
    .service('intervalService', intervalService);

function intervalService($interval, usersMessagesConst) {
    var _this = this;
    this.audio = new Audio('./src/gets-in-the-way.mp3');
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

     this.start = function () {
         _this.interval = $interval( simulateUsers,  3000);
     };

    this.stop = function () {
        $interval.cancel(_this.interval);
    }

}