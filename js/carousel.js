(function(){
    var i=0;
    var LIWIDTH=400;
    var DURATION=500;
    var LICOUNT=10;
    var carousel;
    carousel=document.querySelector(".main-line-2 .line-2-left .carousel");
    // console.log(carousel);
    var ulImgs=document.querySelector(".main-line-2 .line-2-left .carousel ul");
    //console.log(ulImgs);
    var ulIdxs=document.querySelector(".main-line-2 .line-2-left .carousel-list ul");
    //console.log(ulIdxs);
    var lis=ulIdxs.children;
    //console.log(lis);
    var div_left=document.querySelector(".main-line-2 .line-2-left .carousel .left-right .left-img");
    var div_right=document.querySelector(".main-line-2 .line-2-left .carousel .left-right .right-img");
    var can_click=true;
    //console.log(div_left,div_right);
    function moveTo(to){
        if(to==undefined){
            to=i+1;
        }
        if(i==0){
            if(to>i){
                ulImgs.className="transition";
            }else{
                ulImgs.className="";
                ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
                setTimeout(()=>{
                    moveTo(LICOUNT-1);
                    //console.log(LICOUNT-1);
                },100);
                return;
            }
        }
        i=to;
        ulImgs.style.marginLeft=-i*LIWIDTH+"px";
        for(var li of lis){
            li.className="";
        }
        if(i==LICOUNT){
            i=0;
            setTimeout(()=>{
                ulImgs.className="";
                ulImgs.style.marginLeft=0;
            },DURATION);
        }
        //console.log(i);
        lis[i].className="active";
        if(i==5){
            ulIdxs.style.marginLeft=-i*81+"px";
        }else if(i==0){
            setTimeout(()=>{
                ulIdxs.style.marginLeft=0;
            },500)
        }
    }
    function move(n){
        if(can_click){
            moveTo(i+n);
            can_click=false;
            setTimeout(()=>{
                can_click=true;
            },DURATION+100);
        }
    }
    div_left.onclick=function(){
        move(-1);
    }
    div_right.onclick=function(){
        move(1);
    }
    var t1=setInterval(()=>{
            moveTo();
        },5000);
    carousel.onmouseout=function(){
        t1=setInterval(()=>{
            moveTo();
        },5000);
    }
    carousel.onmouseover=function(){
        clearInterval(t1);
    };
    (function(){ 
        var ulIdxs=document.querySelector(".main-line-2 .line-2-left .carousel-list ul");
        //console.log(ulIdxs);
        var lis=ulIdxs.children;
        ulIdxs.onclick=function(e){
            var can_click=true;
            if(can_click){
                var li=e.target;
                //console.log(li);
                if(li.nodeName=="IMG"){
                    //console.log(li.nodeName);
                    if(li.parentNode.className!=="active"){
                        for(var i=0;i<lis.length;i++){
                            if(lis[i].childNodes[1]==li){
                                break;
                            }
                        }
                        moveTo(i);
                    }
                    setTimeout(()=>{
                        can_click=true;
                    },500);
                }
            }
        }
    })();
})();

(function(){
    var i=0;
    var ulImgs;
    ulImgs=document.querySelector(".main-line-2 .line-2-left .carousel-list ul");
    //console.log(ulImgs);
    var div_left;
    var div_right;
    div_left=document.querySelector(".main-line-2 .line-2-left .carousel-list .left-right .left-img");
    //console.log(div_left);
    div_right=document.querySelector(".main-line-2 .line-2-left .carousel-list .left-right .right-img");
    //console.log(div_left);
    div_left.style.display="none";
    div_left.onclick=function(){
        ulImgs.style.marginLeft=0;
        div_left.style.display="none";
        div_right.style.display="block";
    }
    div_right.onclick=function(){
        ulImgs.style.marginLeft=-5*81+"px";
        div_left.style.display="block";
        div_right.style.display="none";
    }
})();
