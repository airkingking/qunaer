//价格详情显示/隐藏
(function(){
    var $span=$(".tprice>.iconfont");
    //console.log($span);
    $div=$(".tprice>div");
    $span.mouseover(function(){
    $div.css("opacity",1)
    });
    $span.mouseout(function(){
        $div.css("opacity",0)
    })
})();

//日历实现
$("#i1").datepicker();
$("#i1").datepicker("option","dateFormat","yy-mm-dd");
$("#d1").datepicker();

var arry=[1000,1203,1030,1140,1260,1280,1360,1407,1300,1455,1433,1312,1345,1120,1220,1230,1140,1160,1080,1060,1007,990,955,933,912,945,912,900,855,833,800];

function rili(){
    var ele=$(".date-box .ui-state-default");
    var $strs=$(".date-box .ui-state-default").length;
    for(var i=0;i<$strs;i++){
        ele[i].innerHTML+=`<span class="eday-price">￥${arry[i]}</span>`;
    }
}

document.body.onload=function(){
    rili();
    var $curPice=$("#d1 .ui-state-active span").html();
    //console.log($curPice);
    $(".tprice>.current-price").html($curPice);
}
$("#d1").click(function(e){
    if(e.target.nodeName!=null){
        rili();
    }
});

//价格选择
(function(){
    var pnum=1;
    var pprice;
    var cnum=0;
    var cprice=500;
    var rnum=1;
    var rprice=200;
    $(".choose-people").click(function(e){
        pprice=$("#d1 .ui-state-active span").html().slice(1);
        console.log(pprice);
        var $currentele=$(e.target);
        if($currentele.is(".people>.fuhao")){
            if($currentele.html()=="+"){
                if(Number($(".people>input")[0].value)<19){
                    $currentele.prev()[0].value++;
                    pnum=$currentele.prev()[0].value;
                    if(pnum%2!==0&&Math.ceil(pnum/2)>rnum){
                        $(".room>input")[0].value++;
                        rnum=$(".room>input")[0].value;
                    }
                }else{
                        $(".people .info").css("opacity",1);
                        $(".people .info").html(`以达到本产品预定上限哦~!`);
                        setTimeout(function(){
                            $(".people .info").css("opacity",0);
                        },2000)
                    }
                
            }else if($currentele.html()=="-"){
                if($currentele.next()[0].value>1){
                    $currentele.next()[0].value--;
                    pnum=$currentele.next()[0].value;
                    pnum=Number(pnum);
                    rnum=Number(rnum);
                    if(pnum<rnum){
                        $(".room>input")[0].value--;
                        rnum=$(".room>input")[0].value;
                    }
                }else{
                    $(".people .info").css("opacity",1);
                    $(".people .info").html(`至少预定${pnum}人出行哦~!`);
                    setTimeout(function(){
                        $(".people .info").css("opacity",0);
                    },2000)
                }
            }
        }
        if($currentele.is(".child>.fuhao")){
            if($currentele.html()=="+"){
                if(Number($(".child>input")[0].value)<19){
                    $currentele.prev()[0].value++;
                    cnum=$currentele.prev()[0].value;
                }else{
                    $(".child .info").css("opacity",1);
                    $(".child .info").html(`以达到本产品预定上限哦~!`);
                    setTimeout(function(){
                        $(".child .info").css("opacity",0);
                    },2000)
                }
            }else if($currentele.html()=="-"){
                if($currentele.next()[0].value>0){
                    $currentele.next()[0].value--;
                    cnum=$currentele.next()[0].value;
                }
            }
        }
        if($currentele.is(".room>.fuhao")){
            if($currentele.html()=="+"){
                if(rnum<pnum){
                    $currentele.prev()[0].value++;
                }else{
                    $(".room .info").css("opacity",1);
                    $(".room .info").html("已达到本产品最多预订上限哦~！");
                    setTimeout(function(){
                        $(".room .info").css("opacity",0);
                    },2000)
                }
                rnum=$currentele.prev()[0].value;
            }else if($currentele.html()=="-"){
                pnum=$(".people>input")[0].value;
                if($currentele.next()[0].value>1&&Math.ceil(pnum/2)<rnum){
                    $currentele.next()[0].value--;
                    rnum=$currentele.next()[0].value;
                }else{
                    $(".room .info").css("opacity",1);
                    $(".room .info").html(`至少预定${rnum}间房哦~`);
                    setTimeout(function(){
                        $(".room .info").css("opacity",0);
                    },2000)
                }
            }
        }
        var total;
        if(rnum>1){
            total=pnum*pprice+cnum*cprice+rnum*rprice;
        }else{
            total=pnum*pprice+cnum*cprice;
        }
        $(".tprice>.current-price").html("￥"+total);
        $(".tprice .changePnum").html(pnum+"x￥1000");
        $(".tprice .changeCnum").html(cnum+"x￥500");
    });
})();


//line-6-a样式实现
(function(){
    $(".line-6-a").click(function(e){
        var $e=$(e.target);
        if(e.target.nodeName=="A"){
            $e.addClass("active");
            var $others=$e.parent().siblings().children();
            $others.removeClass("active");
            $(".line-6-a").addClass("fixed");
            window.scrollTo(0,1500);
            var href=$e.attr("href");
            console.log($(href).children()[0]);
            $(href).css("padding-top","50px");
        }
    });
})();

//固定定位样式实现
$(window).scroll(function(){
    var Y=document.body.scrollTop
    ||document.documentElement.scrollTop;
    //console.log(Y);
    if(Y>=1500){
        $(".line-6-a").addClass("fixed");
        $(".main-line-6 .container").css("margin-top","70px");
        $(".backto-top").css("display","block");
    }else{
        $(".line-6-a").removeClass("fixed");
        $(".main-line-6 .container").css("margin-top","0px");
        $(".backto-top").css("display","none");
    }
    var $pathdiff=$(".line-6-a a");
    if(Y<2814){
        $($pathdiff[0]).addClass("active");
    }
    if(Y>2814 && Y<14464){
        $($pathdiff[0]).removeClass("active");
        $($pathdiff[1]).addClass("active");
    }else{
        $($pathdiff[1]).removeClass("active")
    }
    if(Y>14464 && Y<18259){
        $($pathdiff[0]).removeClass("active");
        $($pathdiff[2]).addClass("active");
    }else{
        $($pathdiff[2]).removeClass("active");
    }
    if(Y>18257 && Y<21521){
        $($pathdiff[0]).removeClass("active");
        $($pathdiff[3]).addClass("active");
    }else{
        $($pathdiff[3]).removeClass("active");
    }
    if(Y>21521 && Y<24482){
        $($pathdiff[0]).removeClass("active");
        $($pathdiff[4]).addClass("active");
    }else{
        $($pathdiff[4]).removeClass("active");
    }
});

//购物车
(function(){
    //$("#cartShow").html("("+cartNum+")");
    $("#cart").click(function(e){
        e.preventDefault();
        var cookie=document.cookie;
        if(cookie==""){
            console.log("未登录");
            alert("当前无用户登录，请登录……");
        }else{
            var pnum=$("#pNum").val();
            var cnum=$("#cNum").val();
            var rnum=$("#rNum").val();
            var sum=$("#sumMoney").html();
            var cartList={
                "pnum":pnum,
                "cnum":cnum,
                "rnum":rnum,
                "sum":sum
            };
            $.ajax({
                url:"http://localhost:3000/cart",
                type:"post",
                data:cartList,
                success:function(res){
                    console.log(res);

                    
                }
            })
            //console.log("已登录");
            
        }
    });
})()
$("#cartShow").click(function(){
    $("#cartList").toggle();
    $.ajax({
        url:" http://localhost:3000/cart",
        type:"get",
        success:function(res){
            console.log(res);
            if(res.length!=0){
                $("#showP").html(res[0].pnum+"人");
                $("#showC").html(res[0].cnum+"人");
                $("#showR").html(res[0].rnum+"间");
                $("#showT").html(res[0].sum+"元");
            }else{
                $("#cartList").html("您的购物车里面什么都没有哦……")
            }
        }
    })
    
})
    



$.ajax({
    url:"http://127.0.0.1:5500/public-footer.html",
    type:"get",
    success:function(res){
       $("footer").replaceWith(res);

    }
})
