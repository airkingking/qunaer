$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
    $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head")
    $.ajax({
        url:`http://localhost:5500/header.html`,
        type:"get",
        success:function(res){
                $(res).replaceAll("header")
                   
        }
    })
    $.ajax({
        url:`http://localhost:5500/footer.html`,
        type:"get",
        success:function(res){
                $(res).replaceAll("footer")
                   
        }
    })
})