angular
    .module('myApp')
    .directive('chatScroll', chatScroll);

function chatScroll() {

    function link(scope, elem, attrs) {
        scope.$watch(
            scope.__height = elem.height()
        );
    }


    return {
        restrict: 'A',
        link: link

    }
}