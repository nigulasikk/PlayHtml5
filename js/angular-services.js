/**
 * Created by qkk on 14-9-28.
 */
var myServices=angular.module("myServices",[]);

myServices.factory('bookService',['$http',function($http){
    var obj=[
        {text:'learn angular', done:true},
        {text:'learn angularx3', done:true},
        {text:'learn angularx', done:true},
        {text:'learn angularx32', done:true},
        {text:'build an angular app', done:false}
    ];
     var obj2=[
        {text:'2', done:true},
        {text:'learn angularx2', done:true},
        {text:'learn angularx2', done:true},
        {text:'learn angularx2', done:true},
        {text:'build an angular app2', done:false}
    ];

    return {
        bookList:obj,
        bookList2:obj2
    }
}]);