 /**
 * Created by cohensha on 2/9/2016.
 */
(function () {
    angular.module('app').config(config);

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];
    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/screens/main/main.tpl.html',
                controller: 'mainCtrl'
            });

        $urlRouterProvider.when('/', '/main');
        $urlRouterProvider.otherwise('/main');
    }
})();