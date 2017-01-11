angular.module('app.features.controllers')
.directive('myAudio', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attr) {
            var coinPlayer = element.children('.coin')[0];
            element.children('.coin-play').hover(function() {
                coinPlayer.play();
            });
            var oneUpPlayer = element.children('.one-up')[0];
            element.children('.one-up-play').hover(function() {
                oneUpPlayer.play();
            });
        }
    };
});
