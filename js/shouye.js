//日历
$(".rili").datepicker();


var btns=document.querySelectorAll(
    "[id=d1]"
  );
(function(){
    var zIndex=1;
    for(var btn of btns){
        btn.onmouseenter=function(){
        var id=this.getAttribute("data-id");
        var div=document.getElementById(id);
        div.style.zIndex=++zIndex;
        }
    }
})();

var btns=document.querySelectorAll("[id=c2]");
(function(){
  var zIndex=1;
  for(var btn of btns){
    btn.onclick=function(){
      var id=this.getAttribute("data-id");
      var div=document.getElementById(id);
       div.style.zIndex=++zIndex;
    }
  }
})();
//境内境外切换
var btns=document.querySelectorAll(
"[data-click=tab]"
);
(function(){
  //全局定义一个zIndex=1;
  var zIndex=1;
  //2. 绑定事件处理函数
  //为每个按钮绑定单击事件
  for(var btn of btns){
    btn.onclick=function(){
      //3. 查找要修改的元素
      //查找当前a对应的div
      //先获得当前a上data-id属性中保存的id
      var id=this.getAttribute("data-id");
            //this.dataset.id
            //console.log(id);
      //用id查找对应的div
      var div=document.getElementById(id);//id不加引号，是因为是一个变量
      //4. 修改元素
      //让div的zIndex为当前zIndex+1
      div.style.zIndex=++zIndex;
      //前++，是因为先+1，再赋值
      // console.log(zIndex);
    }
    
  }
  
})();



//页头标签
$("ul.tabs")
  .on("mouseenter","a",function(){
    $(this)
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active")
  })
  //搜索列表active
  $("ul.lists")
  .on("click","a",function(){
    $(this)
    .parent()
    .addClass("active")
    .siblings()
    .removeClass("active")
  })

  //境内境外active
  $(".ch_tab")
  .on("click",function(e){
    var $e=$(e.target);
    if(e.target.nodeName=="A"){
      $e
      .addClass("active")
      .siblings().removeClass("active");
    }
  })

//左边长条关闭
$(".close")
.click(function(){
  var a=$(this).parent().parent()
  // console.log(a)
  .css("display","none")
})

//添加去哪图片
$(".close")
.click(function(){
  var a=$(".guan")
  // console.log(a)
  .css("display","block")
})

//去哪儿消失 长条出现
$(".guan")
.click(function(){
  $(this)
  .css("display","none")
})
$(".guan")
.click(function(){
  var a=$(".zuochang")
  // console.log(a);
  .css("display","block")
})


$(".qiehuan")
.click(function(){
  var a=$(".cf-in").val();
  var b=$(".dd-in").val();
  a1=$(".cf-in").val(b);
  b1=$(".dd-in").val(a);
  // console.log(a1);
  // console.log(b1);
})
//字条上浮
// $("#shangfu-father")
// .mouseenter(function(){
//   $(".shangfu").css("top","194px")
// })
// .mouseout(function(){
//   $(".shangfu").css("top","240px")
// })


//input地区
$("#city").click(function (e) {
  SelCity(this,e);
  console.log($("#city"))
});
$("#city1")
.click(function(e){
  SelCity(this,e);
});
