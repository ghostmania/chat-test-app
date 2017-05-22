angular.
module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: function chatController($scope, $timeout, $interval, usersMessagesConst, intervalService) {
            $scope.username = localStorage.getItem('currentUser');
            $scope.messages = intervalService.messages;
            $scope.message = this.value;
            $scope.scrollToBottom = false;
            document.getElementById('messageArea').focus();
            $scope.sendMsg = function() {
                if ($scope.message && localStorage.getItem('currentUser')) {
                    $scope.scrollToBottom = true;
                    var msg = {
                        author: localStorage.getItem('currentUser'),
                        time: new Date(),
                        content: $scope.message
                    };
                    $scope.messages.push(msg);
                    $scope.message = "";
                    intervalService.audio.play();
                    $timeout(function(){
                        $scope.scrollToBottom = false
                    } , 1000)
                }
                document.getElementById('messageArea').focus();
            };
            intervalService.start();
        }
    });
