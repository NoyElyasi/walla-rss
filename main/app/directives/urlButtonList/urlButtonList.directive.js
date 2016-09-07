(function () {
    angular.module("directives").directive("urlButtonList", sidebarHeader);
    sidebarHeader.$inject = [];
    function sidebarHeader() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: "app/directives/urlButtonList/urlButtonList.directive.tpl.html",
            link: link
        };
        function link(scope, elem, attributes) {
        }
    }
})();
