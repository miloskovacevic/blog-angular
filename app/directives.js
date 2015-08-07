/**
 * Created by Milos on 8.8.2015.
 */
angular.module('app.directives',[])
    .directive('navigationbar',[function () {
        return {
            controller: ['$scope','$http',function ($scope, $http) {
                $http.get('data/pages.json').success(function (data) {
                    $scope.pages = data;
                });
            }],

            restrict:'E',
            //template:'<h1>Navigation</h1>',
            templateUrl: 'partials/navigationbar.html',
            link: function ($scope, iElm, iAttrs, controller) {

            }

        }

    }]);