function checkIfSupportLocalStorage() {
    if (window.localStorage) {
        alert("支持本地存储");
    } else {
        alert("不支持本地存储");
        // 不支持 localStorage
    }
}

function showLocalList() {
    var storage = window.localStorage;
    for (var i = 0, len = storage.length; i < len; i++) {
        var key = storage.key(i);
        var value = storage.getItem(key);
        var table = document.getElementById("localList");

        console.log(key + "=" + value);
    }
}
function addLocal() {
    var data = document.getElementById("test-data").value;
    var date = new Date().getTime();
    localStorage.setItem(date, data);
}
function clearAll() {
    sessionStorage.clear();
    localStorage.clear();
}
function sessionSave(id) {

    var data = document.getElementById(id).value;
    sessionStorage.setItem("session-value", data);

}
function localSave() {
    var data = document.getElementById("test-data").value;
    localStorage.setItem("local-value", data);
}
function showLocalValue() {
    var msg = document.getElementById("msg");
    var localValue = localStorage.getItem("local-value");
    msg.value = localValue;
}
function showSessionValue() {
    var msg = document.getElementById("msg");
    var sessionValue = sessionStorage.getItem("session-value");
    msg.value = sessionValue;

}
function showFile() {
    var file;
    file = document.getElementById("file").files[0];
    var size = file.size;
    var type = file.type;
    alert("文件大小为" + size + "      -----文件类型为" + type);
}
$(".show-detail").hide();
$(".hover-expend").mouseenter(function () {
    var position = $(this).position();
    console.log("top" + position.top + "------left:" + position.left);
    $(".show-detail").css({"top": position.top, "left": position.left, "display": "block"});
    $(".show-detail").stop(true, true).animate({width: "100px", height: "100px"}, 1500);
    $(".show-detail").html("具体内容1,。");
});
$(".hover-expend").mouseleave(function () {
    $(".show-detail").css({display: ""});
    $(".show-detail").stop(true, true).animate({width: 0, height: 0}, 100);
});
//登录按钮
$("#login").click(function () {
    var height = $(document).height();
    var width = $(document).width();
    var cHeight = $(window).height();
    var cWidth = $(window).width();

    var mTop = (cHeight - 200) / 2;
    var mLeft = (cWidth - 500) / 2;
    console.log("height:" + height + "----width" + width + "---windowWidth:" + cWidth + "windowHeight" + cHeight);

    var mask2 = $(' <div id="mask2" style="z-index:999;background-color: black;opacity: 0.4;position:fixed;width:' + cWidth + 'px;height: ' + cHeight + 'px;"></div>');
    var loginDiv = $('<div id="login-div" style="z-index:1000;top:' + mTop + 'px;left:' + mLeft + 'px;position:fixed;height: 200px;width: 500px;border: 2px solid #BE3333;color:red;line-height:200px;text-align:center;opacity:0.4;">登录框！有意思吧<span id="close-login" style="line-height:20px;float: right;margin-right: 3px;">X</span></div>');

    $("body").prepend(mask2);
    $("body").prepend(loginDiv);
    //$("body").eq(0).appendChild(mask);
    //close login
    //点击屏幕黑色部分也触发
    $("#close-login,#mask2").click(function () {
        console.log("登录关闭按钮！");
        $("#mask2").remove();
        $("#login-div").remove();
    });

});
//验证日期格式
$("#validateTime").click(function () {
    var time = $("#startTime").val();
    if(checkDate(time)){
        alert("验证成功！");
    }else{
        alert("格式不正确啊！如 2014-05-05或2014-5-5");
    }
});
//正则验证日期格式
function checkDate(date) {
    console.log(" 进行验证的日期："+date);
    var dateReg=/^[0-9]{4}-[0-1]?[0-9]{1}-[0-3]?[0-9]{1}$/;
    return dateReg.test(date);
}
//多重id测试
$(".hello-test").click(function(){
    var text=$("#hello").text();
    alert(text);
});
//防止污染全局变量  代码块
(function(){
    var b="kk";

})();

//js对象
function A(x, y) {
    this.x = x;
    this.y = y;
    this.state="open";
    A.prototype.close = function () {
        console.log("A方法 close")
        this.state="close";
    };
    A.prototype.open = function () {
        console.log("A方法 open");
        this.state="open";
    };
    A.prototype.switcher=function(){
        if(this.state=="open"){
            this.close();

        }else{
            this.open();
        }
    }
}
var obj = new A(5, 10);
obj.switcher();
obj.switcher();
obj.switcher();

console.log("对象参数X：" + obj.x);
console.log("对象参数X：" + obj.y);
//obj.functionx();
//obj.FunY();
//临时添加方法
A.prototype.FunZ = function () {
    console.log("临时添加functionZ")

};
obj.FunZ();
//js对象另外一种写法
var B=function(x,y){
    this.x=x;
    this.y=y;
    B.prototype.funA=function(){
        x+=0;
        var z=x+''+y;
        console.log("B 对象 A方法"+z);
    }

}
var obj2=new B(1,2);
obj2.funA();
//判断非空妙用

$("#output").click(function(){
    var a=$("#nullValue").val();
    a=a||"defaultValue";
    alert(a);
});

$("#createForm").click(function(){
    var form=$("<form>");
    form.attr("style","display:none");
    form.attr("method","post");
    form.attr("target","_blank");
    form.attr("action",  "/filemanage/download.shtm");
    var input=$("<input>");
    input.attr("type","hidden");
    input.attr("name", "pathname");
    input.attr("value", "filaPath");
    form.append(input);
    $("body").append(form);
});
//循环赋值 里面function  bug
//闭包概念
//function里面的_j，用的是括号里的j（传值）
for(var j=0;j<4;j++){
  //  var lockedInIndex=j;
    console.log("for循环："+j);
    (function(_j){
        $(".bibao li").eq(_j).click(function(){
            console.log("闭包测试："+_j+"haha");
        });
    })(j);
}
//this概念
for(var j=0;j<4;j++){
    console.log("xixi for循环："+j);
    $(".thisValue li")[j]._i=j;
        $(".thisValue li").eq(j).click(function(){
            console.log("xixi闭包测试："+this._i);
        });

}

// Create an anonymous function expression that gets invoked immediately,
// and assign its *return value* to a variable. This approach "cuts out the
// middleman" of the named `makeWhatever` function reference.
//
// As explained in the above "important note," even though parens are not
// required around this function expression, they should still be used as a
// matter of convention to help clarify that the variable is being set to
// the function's *result* and not the function itself.

var counter = (function(){
    var i = 0;

    return {
        get: function(){
            return i;
        },
        set: function( val ){
            i = val;
        },
        increment: function() {
            return ++i;
        }
    };
}());

// `counter` is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
console.log("counter :get"+counter.get());
counter.set( 3 );
counter.increment(); // 4
console.log("counter :increment"+counter.increment());//5

counter.increment(); // 5
console.log("counter :increment"+counter.increment());//7


//测试canvas数据
var allData=[
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
     {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},
    {color:1,info:"已完成"},

    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"},
    {color:2,info:"进行中"}

];
s("allData--length:"+allData.length);
//canvas画方块
var blocks = document.getElementById('block-canvas');
var ctx = blocks.getContext('2d');

//数据长度
var dataLength = 1500;
if (dataLength < 1600) {
    //正方形边长
    var blockLength = 15;
    //一块长方形 起始位置
    var blockTotalLength = 17;
    //每行放几个正方形
    var eachRow = 40;
} else {
    //正方形边长
    var blockLength = 9;
    //一块长方形 起始位置
    var blockTotalLength = 10;
    //每行放几个正方形
    var eachRow = 68;
}

//TODO:

//canvas画布长度
s("建议canvas画布宽度设置成为："+eachRow*blockTotalLength);
//画图
for (var i = 0; i < dataLength; i++) {
    //第几行
    var line=(i-i%eachRow)/eachRow;
    //第几列
    var col=i%eachRow;
    //TODO:
    if(i%4==1){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(blockTotalLength*col, line*blockTotalLength, blockLength, blockLength);
    }else{
        ctx.fillStyle = 'green';
        ctx.fillRect(blockTotalLength*col,line*blockTotalLength, blockLength, blockLength);
    }
}
//画布点击
$("#block-canvas").click(function(e){
    var position=getPosition(e);
    if(position){
        var col=position.col;
        var row=position.row;
        s("col:"+col+"----row:"+row);
    }else{
        s("点在外面");
    }


}

);
//获取鼠标点击位置
function getPosition(e){
    var x,y;
    if(e.layerX){
        //ff
        x= e.layerX;
        y= e.layerY;
    }else{
        //Chrome
        x= e.offsetX;
        y= e.offsetY;
    }

    var col=(x-x%blockTotalLength)/blockTotalLength+1;
    var row=(y-y%blockTotalLength)/blockTotalLength+1;

    return ((row-1)*eachRow+col-1)<dataLength?{col:col,row:row}:null;
}
//控制台输出
function s(about){
    console.log(about);
}

//CSS3 transform属性和animation属性
$("#transform-div").click(function(){

    $(this).css("-webkit-transform","skew(180deg,180deg)");

});

//canvas话注释，箭头
//画注释 canvas
var tip = document.getElementById("block-about");
var ctx = tip.getContext('2d');
//方块加文字
drawBlockAndText(ctx,10,10,"未下载","#CCCCCC");
//三角形
drawArr(ctx,40,20);
//方块加文字
drawBlockAndText(ctx,105,10,"已下载","#FFCC66");
//三角形
drawArr(ctx,130,20);
//方块加文字
drawBlockAndText(ctx,200,10,"已整理","#0099FF");
//三角形
drawArr(ctx,225,20);
//方块加文字
drawBlockAndText(ctx,295,10,"已上传","#00CC00");

//下载失败有4个字，要控制下格式
ctx.fillStyle ="#CC0000";
ctx.fillRect(360,10,14,14);
ctx.fillStyle = 'rgba(0,0,0,1)';
ctx.fillText("下载失败",360-15,10+27);

//画三角形
function drawArr(context,x,y){
    context.moveTo(x,y);
    context.lineTo(x+10,y);
    context.moveTo(x+13,y);
    context.lineTo(x+23,y);
    context.moveTo(x+26,y);
    context.lineTo(x+36,y);
    context.moveTo(x+40,y-10);
    context.lineTo(x+40,y+10);
    context.lineTo(x+50,y);
    context.lineTo(x+40,y-10);
    context.stroke();
}
function drawBlockAndText(context,x,y,text,color){
    context.fillStyle =color;
    context.fillRect(x,y,14,14);
    context.fillStyle = 'rgba(255,255,255,1)';
    context.fillText(text,x-10,y+27);
}

//跳表效果
var plusNum=0;
//setInterval不能直接执行
plueOne();
setInterval(function(){plueOne()},1000);
function plueOne(){
    plusNum++;
//console.log("plus!"+plusNum);
    $("#run-value").text(plusNum);
}

(function(){
    var context = document.getElementById("ball-fall").getContext('2d');

    var ball={x:30,y:30,r:10,vx:5,vy:-2,color:"#FAEF77"}
var balls=[];
    var colors=["#333333","#33CC66","#CC3333","#CCFF66","#99FF66"]

    for(var i=0;i<100;i++){
        var x=Math.random()*1000;
        var y=Math.random()*50;
        var vx=Math.random()+4;
        var vy=(Math.random())*5;
        var color=colors[Math.floor(Math.random()*5)];
        var balli={x:x,y:y,r:10,vx:vx,vy:vy,color:color}
        balls.push(balli);
    }

    setInterval(function(){
        update();
        render();
//        画球
//        render2();
    },50);
    function render2(){
        //清楚图层
        context.fillStyle="green";
        context.beginPath();
        context.arc(990,490,10,0,2*Math.PI);
        context.fill();
    }
    function render(){
        //清楚图层
        //不clear  会留下画笔痕迹
       context.clearRect(0,0,1000,500);
        for(var i=0;i<balls.length;i++)
        {
            context.fillStyle=balls[i].color;
            context.beginPath();
            context.arc(balls[i].x,balls[i].y,balls[i].r,0,2*Math.PI);
            context.fill();
        }

    }
    function update(){
        for(var i=0;i<balls.length;i++){
            balls[i].x+=balls[i].vx;
            balls[i].y+=balls[i].vy;
//        重力
            balls[i].vy+=1;
            //小球碰到底部
            if(balls[i].y>=500-10){
                balls[i].y=490
                //能耗损失
                balls[i].vy=-balls[i].vy*.5;
            }
            if(balls[i].y<=10){
                balls[i].y=10;

                balls[i].vy=-balls[i].vy;

            }
            if(balls[i].x>=990){
                balls[i].x=990;
                balls[i].vx=-ball.vx;
            }
            if(balls[i].x<=10){
                balls[i].x=10;
                balls[i].vx=-balls[i].vx;
            }

        }




    }
})();