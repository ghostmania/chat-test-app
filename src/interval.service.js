angular
    .module("myApp")
    .service('intervalService', intervalService);

function intervalService($scope, $interval, usersMessagesConst) {

    this.xx = function simulateUsers() {
        // var randomMsg = usersMessagesConst.messages[Math.floor(Math.random() * 3)];
        // $scope.messages.push({
        //     "author" : randomMsg.author,
        //     "time" : new Date(),
        //     "content": randomMsg.content
        // });
        // audio.play();
        console.log('success')
    }
}