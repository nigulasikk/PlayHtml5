/**
 * Created by qkk on 14-9-25.
 */
var myDirective=angular.module("myDirective",[]);
myDirective.directive("hello",function(){
    return {
        restrict:"AE",
        transclude:true,
        template:"<div>myDirective hover to say something<div ng-transclude></div></div>",
        link:function(scope,element,attr){
            //操作dom，绑定监听器,增加样式
            element.bind("mouseover",function(){
                //apply 里面方法都要写小写
                scope.$apply(attr.howtosay);
            });
        }
    }
});

//superman demo

myDirective.directive("superman",function(){

    return {
        scope:{},
        restrict:"AE",
        controller:function($scope){
            //用来暴露方法
            $scope.abilities=[];
            this.addStrength = function () {
                $scope.abilities.push("strength");
            }
            this.addSpeed = function () {
                $scope.abilities.push("speed");
            }
            this.addLight = function () {
                $scope.abilities.push("light");
            }

        },
        link:function(scope,element,attr){
            element.bind("mouseover",function(){
                console.log(scope.abilities);
            });
        }

    }
});

myDirective.directive('strength',function(){
    return {
        require:'^superman',
        link:function(scope,element,attr,supermanCtrl){
            //supermanCtrl 被继承的controller
            supermanCtrl.addStrength();
        }
    }
});
myDirective.directive('speed',function(){
    return {
        require:'^superman',
        link:function(scope,element,attr,supermanCtrl){
            //supermanCtrl 被继承的controller
            supermanCtrl.addSpeed();
        }
    }
});
myDirective.directive('light',function(){
    return {
        require:'^superman',
        link:function(scope,element,attr,supermanCtrl){
            //supermanCtrl 被继承的controller
            supermanCtrl.addLight();
        }
    }
});
//独立作用于
myDirective.directive('separate',function(){
    return {
        //独立scope
        scope:{},
        restrict:"AE",
        template:'<input type="text" ng-model="separateName"><span>{{separateName}}</span>'
    }
});
//scope绑定分类 @ = &
myDirective.directive('drink',function(){
    return {
        restrict:"AE",
//        等于号绑定，在属性里面直接传递对象
//        @绑定，传递的是字符串
        scope:{flavor:'='},
        template:'<div><input type="text" ng-model="flavor"></div>'
//        link:function(scope,element,attrs){
//            scope.flavor=attrs.flavor;
//        }
    }
});

myDirective.directive('greeting',function(){
    return{
        restrict:"AE",
        scope:{greet:"&"},
        template:'<input type="text" ng-model="username"><br>' +
            '<button ng-click="greet({n:username})">greet</button>'
    }
});