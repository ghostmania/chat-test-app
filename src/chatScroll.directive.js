(function() {
    'use strict';

    angular
    .module('myApp')
    .directive('chatScroll', chatScroll);

function chatScroll() {
    function link(scope, element) {
        scope.$watch('chatScroll', function (newValue) {
            if (newValue) {
                $(element).parent().scrollTop($(element)[0].scrollHeight)
            }
        }, true);
    }
    return {
        scope: {
          chatScroll: "="
        },
        link: link
    }
}
})();
