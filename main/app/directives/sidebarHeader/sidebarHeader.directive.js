
(function () {
    angular.module("directives").directive("sidebarHeader", sidebarHeader);
    sidebarHeader.$inject = ['$http'];
    function sidebarHeader($http) {
        return {
            restrict: 'E',
            templateUrl: "app/directives/sidebarHeader/sidebarHeader.directive.tpl.html",
            link: link
        };
        function link(scope, elem, attributes) {
            

            // checking the validation of the url.
            scope.checkUrl = function (url) {
                $http({
                    method: 'GET',
                    url: 'http://localhost:8080/getXML/',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    params:{url:url}
                    }).then(function successCallback(response) {
                        scope.jsonFile= response.data;
                        scope.url= url;
                        this.style= "chosen";
                        scope.showFile(scope.url, scope.jsonFile);
                        scope.addUrlButton();
                }, function errorCallback(response) {
                    console.log("false");
                    alert("please enter valid url");    
                });
            }

            //adding the buttons.
            scope.addUrlButton = function(){
                var a = [];
                if(JSON.parse(localStorage.getItem('urlArray')) != null)
                {
                    a = JSON.parse(localStorage.getItem('urlArray'));
                }
                a.unshift([scope.url, scope.jsonFile]);
                localStorage.setItem('urlArray', JSON.stringify(a));
                scope.urlArray= JSON.parse(localStorage["urlArray"]);
            }

            //deleting the buttons.
            scope.deleteUrlButton = function(deleUrl){
                var a = [];
                if(JSON.parse(localStorage.getItem('urlArray')) != null)
                {
                    a = JSON.parse(localStorage.getItem('urlArray'));
                }
                for(array in a){
                    var idx=-1;
                    if(a[array][0] == deleUrl[0]){
                        idx = array;
                        break;
                    }
                }
                if (idx != -1) a.splice(idx, 1);
                localStorage.setItem('urlArray', JSON.stringify(a));
                scope.urlArray= JSON.parse(localStorage["urlArray"]);
            }

            
        }
    }
})();
