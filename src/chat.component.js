angular.
module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: function chatController($scope, $interval, usersMessagesConst, intervalService) {
            $scope.username = localStorage.getItem('currentUser');
            $scope.messages = intervalService.messages;
            $scope.message = this.value;
            $scope.sendMsg = function() {
                if ($scope.message && localStorage.getItem('currentUser')){
                    var msg = {
                        author: localStorage.getItem('currentUser'),
                        time: new Date(),
                        content: $scope.message
                    };
                    $scope.messages.push(msg);
                    $scope.message = "";
                    intervalService.audio.play();
                }
                document.getElementById('message').focus();
            };

            // intervalService.start();

        }
    });