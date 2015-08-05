/**
 * Created by Milos on 5.8.2015.
 */
angular.module('app', ['ngRoute','app.controllers'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'views/post.html',
            controller: 'PostController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);