//分页实现
(function(){
    var $images=$("#main .main_line_5 .row .line_5_img img");
    var $pages=$(".page-list");
    $pages.click(function(e){
        if(e.target.nodeName=="A"){
            e.preventDefault();
            var n=$(e.target).html();
            if(n=="上一页"){
                n=1;
            }else if(n=="下一页"){
                n=2;
            }
            $.ajax({
                url:`http://localhost:3000/pages${n}`,
                type:"get",
                success:function(result){
                    console.log(typeof n);
                    for(var i=0;i<$images.length;i++){
                        var $image=$images[i];
                        $($image).attr("src",result[i]);
                    };
                }
            })
        }
    })
})();
//main-line-3切换实现
(function(){
    var $source=$("#main_line_1>ul li a");
    var $target=$(".main_line_3");
    $("#main_line_1>ul").click(function(e){
        if(e.target.nodeName=="A"){
            var n=$(e.target).attr("data-i");
            console.log(n,e.target);
            for(var i=0;i<$source.length;i++){
                $($target[i]).addClass("hide");
            }
            if(n!=0){
                var long=$(".destination>div:first-child");
                $(long[n]).css("height","60px");
            }
            $($target[n]).removeClass("hide");
        }
    })
})();




