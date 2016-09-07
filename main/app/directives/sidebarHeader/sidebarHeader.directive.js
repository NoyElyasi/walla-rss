
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
                var tempArray = [];
                //if the urlArray is not null.
                if(JSON.parse(localStorage.getItem('urlArray')) != null)
                {
                    tempArray = JSON.parse(localStorage.getItem('urlArray'));
                }
                //add the new url+json to the beginning of the temoArray.
                tempArray.unshift([scope.url, scope.jsonFile]);
                localStorage.setItem('urlArray', JSON.stringify(tempArray));
                scope.urlArray= JSON.parse(localStorage["urlArray"]);
            }

            //deleting the buttons.
            scope.deleteUrlButton = function(deleUrl){
                var tempArray = [];
                //if the urlArray is not null.
                if(JSON.parse(localStorage.getItem('urlArray')) != null)
                {
                    tempArray = JSON.parse(localStorage.getItem('urlArray'));
                }
                //loop that runs over the array.
                for(array in tempArray){
                    var idx=-1;
                    //checks the index of the pressed button.
                    if(tempArray[array][0] == deleUrl[0]){
                        idx = array;
                        break;
                    }
                }
                //if the idx is valid delete the pressed button.
                if (idx != -1) tempArray.splice(idx, 1);
                localStorage.setItem('urlArray', JSON.stringify(tempArray));
                scope.urlArray= JSON.parse(localStorage["urlArray"]);
            }

            
        }
    }
})();
