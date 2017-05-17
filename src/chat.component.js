angular.
module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: function chatController($scope, $interval, usersMessagesConst) {
            $scope.username = localStorage.getItem('currentUser');
            $scope.messages = [];
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
                }
            };
           function simulateUsers() {
                var randomMsg = usersMessagesConst.messages[Math.floor(Math.random() * 3)];
                $scope.messages.push({
                    "author" : randomMsg.author,
                    "time" : new Date(),
                    "content": randomMsg.content
                });
            }

            $interval( function(){
                simulateUsers()
            },  3000);
        }
    });