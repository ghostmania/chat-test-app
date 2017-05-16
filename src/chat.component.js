angular.
module('myApp')
    .component('chat', {
        templateUrl: './src/chat.component.html',
        controller: function chatController($scope) {
            console.log('chatController loaded');
            $scope.messages = [];
            $scope.message = this.value;
            $scope.sendMsg = function() {
                if ($scope.message && localStorage.getItem('currentUser')){
                    $scope.messages.push($scope.message);
                    console.log($scope.messages);
                }
            }
        }
    });
