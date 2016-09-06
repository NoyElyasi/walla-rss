
(function () {
    angular.module("directives").directive("itemDirective", itemDirective);
    itemDirective.$inject = ['$sce'];
    function itemDirective($sce) {
        return {
            restrict: 'E',
            templateUrl: "app/directives/itemDirective/itemDirective.directive.tpl.html",
            link: link
        };
        function link(scope, elem, attributes) {
            scope.trustedHtml = $sce.trustAsHtml(scope.item.content);
        }
    }
})();
