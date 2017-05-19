angular
    .module('myApp')
    .directive('chatScroll', chatScroll);

function chatScroll() {
    function link(scope, element) {
        scope.$watchCollection('chatScroll', function (newValue) {
            if (newValue)
            {
                $(element).parent().scrollTop($(element)[0].scrollHeight);
            }
        });
    }
    return {
        scope: {
          chatScroll: "="
        },
        link: link
    }
}