/**
 * Created by cohensha on 2/9/2016.
 */
(function () {
    angular.module("directives").directive("sidebarHeader", sidebarHeader);
    sidebarHeader.$inject = [];
    function sidebarHeader() {
        return {
            restrict: 'E',
            templateUrl: "app/directives/sidebarHeader/sidebarHeader.directive.tpl.html",
            scope: {
            },
            link: link
        };
        function link(scope, elem, attributes) {
             
            // console.log(url);
            scope.checkUrl = function (url) {
                // body...
                scope.url = url;
                console.log(scope.url);
            }
        }
    }
})();
