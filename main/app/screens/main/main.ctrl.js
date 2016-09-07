
(function () {
    angular.module("controllers").controller("mainCtrl", mainCtrl);
    mainCtrl.$inject = ['$scope', '$state'];
    function mainCtrl($scope, $state) {
       $scope.jsonFile;
       $scope.url;
       $scope.header;
       var urlArray = [];

      //if the urlArray isnt exist yet in the localStorage.
      if (!localStorage.urlArray) {
       localStorage["urlArray"] = JSON.stringify(urlArray);
      }

     	$scope.urlArray= JSON.parse(localStorage["urlArray"]);
      //if the user refresh the page, the content of the page will be initialized.
      if($scope.urlArray.length>0){
        $scope.jsonFile=JSON.parse($scope.urlArray[0][1]);
        $scope.feed=$scope.jsonFile.responseData.feed.entries;
        $scope.header=$scope.urlArray[0][0];
      }

      //showing the content of the rss.
      $scope.showFile = function(url, json){
        var str= json;
        var myJson = JSON.parse(str);
        $scope.header=url;
        $scope.feed=myJson.responseData.feed.entries;
        this.style= "chosen";
      }
    }
})();
