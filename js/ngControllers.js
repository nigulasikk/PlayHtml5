/**
 * Created by qkk on 14-9-25.
 */
var ngControllers=angular.module('ngControllers',[])
ngControllers.controller('PhoneListCtrl', ['$scope',
    function($scope) {
        $scope.phones = [
            {"name": "Nexus S",
                "snippet": "Fast just got faster with Nexus S.",
                "age": 0},
            {"name": "Motorola XOOM™ with Wi-Fi",
                "snippet": "The Next, Next Generation tablet.",
                "age": 1},
            {"name": "MOTOROLA XOOM™",
                "snippet": "The Next, Next Generation tablet.",
                "age": 2}
        ];
        $scope.orderProp = 'age';
        $scope.click=function(){
            $scope.phones[0].name="Nexus S1111111";
            console.log("changed 'Nexus S' to 'NExus S11111'");

        }
    }
]);

ngControllers.controller('viewControl', ['$scope','$routeParams','$route',
    function($scope,$routeParams,$route) {
        $scope.phones = [
            {"name": "Nexus S",
                "snippet": "Fast just got faster with Nexus S.",
                "age": 0},
            {"name": "Motorola XOOM™ with Wi-Fi",
                "snippet": "The Next, Next Generation tablet.",
                "age": 1},
            {"name": "MOTOROLA XOOM™",
                "snippet": "The Next, Next Generation tablet.",
                "age": 2}
        ];
        //这里直接穿内容传不过去，  要把这个对象穿到前端，前端再去取值
        $scope.roteid=$routeParams;

    }
]);


// TODO: ng-route过来 通过上面的方式声明controller 不成功。。。。。。   -。-
function viewControl($scope){
    $scope.phones = [
        {"name": "Nexus S function",
            "snippet": "Fast just got faster with Nexus S.",
            "age": 0},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "age": 1},
        {"name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.",
            "age": 2}
    ];
    $scope.orderProp = 'age';

}


ngControllers.controller('bodyController', ['$scope','$http',
    function($scope,$http) {
        $scope.bodyValue="bodyValue----xixixixxi";
        $scope.isGreen=true;

        $scope.changeColor=function(){
            $scope.isGreen=false;
            $scope.isRed=true;

        }
        $scope.getName=function(){
            console.log("name:"+$scope.bodyValue);
        }
         $scope.setName=function(){
             $scope.bodyValue="bodyValue----hahahhaa";
        }
//Ngshow
        $scope.ngShow=true;
        $scope.ngToggle=function(){
            $scope.ngShow=!$scope.ngShow;

        }
        $scope.say1=function(){
            console.log("say1:");
        }
        $scope.say2=function(){
            console.log("say2");
        }

        $scope.ctrFlavor="baiwei";

        $scope.sayHello=function(name){
            console.log("hello,"+name);
        }


        $http.get('../jsonFile/phones.json').success(function(data) {
            $scope.phones = data;
        });

    }
]);

ngControllers.controller("formCtrl",['$scope',function($scope){
    $scope.user={username:"kaige",passwd:"123456"};
    $scope.save=function(){
        alert("save:"+$scope.user.username);
    };
}]);

ngControllers
    .controller('TodoController', ['$scope','bookService', function($scope,bookService) {
//        $scope.todos = [
//            {text:'learn angular', done:true},
//            {text:'build an angular app', done:false}];
        //用service注入获取
        $scope.todos=bookService.bookList2;

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }]);