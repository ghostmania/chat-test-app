angular
    .module('myApp')
    .directive('chatScroll', chatScroll);

function chatScroll() {

    chatt = function () {
        .("#chatArea").animate({scrollTop: $(document).height()}, "slow");
        return false;

    };

    return {
        restrict: 'A',
        chat: chatt
    }
}