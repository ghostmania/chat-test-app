angular
    .module('myApp')
    .directive('chatScroll', chatScroll);

function chatScroll() {
    function link(scope, element) {
        scope.$watch('chatScroll', function (newValue, oldValue) {
            console.log(newValue, oldValue)
            if (newValue) {
                console.log(newValue, oldValue)

                $(element).parent().scrollTop($(element)[0].scrollHeight)
            }
        }, true);
        // console.log(element);
        // element.parent().on('click', function () {
        //     console.log('click!!!!', $(element)[0].scrollHeight) ;
        //     $(element).parent().scrollTop($(element)[0].scrollHeight)
        // })
    }
    return {
        scope: {
          chatScroll: "="
        },
        link: link
    }
}