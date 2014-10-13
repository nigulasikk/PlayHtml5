/**
 * Created by qkk on 14-9-28.
 */
var myFilter=angular.module("myFilter",[]);
myFilter.filter('filter1',function(){
    return function(item){
        return item+"(*^__^*) 嘻嘻……";
    }
});