/**
 * Created by qkk on 14-9-19.
 */
// 定义一个模块
var angularApp = angular.module('ngApp', ['ngRoute','ngControllers','myDirective','myFilter','myServices']);

angularApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ngview1', {templateUrl: 'ngView1.html',   controller: viewControl})
        .when('/ngview2/:id',{templateUrl: 'ngView2.html',   controller: viewControl})
        .otherwise({redirectTo:'/'});
}]);
