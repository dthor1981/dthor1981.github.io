angular.module('app.features.controllers')
.directive('myAudio', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attr) {
            var player = element.children('.player')[0];
            element.children('.play').hover(function() {
                player.play();
            });
        }
    };
});
