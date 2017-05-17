angular.
module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: function chatController($scope, $interval, usersMessagesConst, intervalService) {
            $scope.username = localStorage.getItem('currentUser');
            $scope.messages = [];
            $scope.message = this.value;
            var audio = new Audio('./src/gets-in-the-way.mp3');
            $scope.sendMsg = function() {
                if ($scope.message && localStorage.getItem('currentUser')){
                    var msg = {
                        author: localStorage.getItem('currentUser'),
                        time: new Date(),
                        content: $scope.message
                    };
                    $scope.messages.push(msg);
                    $scope.message = "";
                    audio.play();
                }
            };

            $interval( function(){
                intervalService.xx()
            },  3000);

        }
    });