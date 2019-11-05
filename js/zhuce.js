// window.onload=function(){
// 	createCode(4);    
// 	}

	//生成验证码的方法
	function createCode(length) {
			var code = "";
			var codeLength = parseInt(length); //验证码的长度
			var checkCode = document.getElementById("checkCode");
			////所有候选组成验证码的字符，当然也可以用中文的
			var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
			//循环组成验证码的字符串
			for (var i = 0; i < codeLength; i++)
			{
					//获取随机验证码下标
					var charNum = Math.floor(Math.random() * 62);
					//组合成指定字符验证码
					code += codeChars[charNum];
			}
			if (checkCode)
			{
					//为验证码区域添加样式名
					checkCode.className = "code";
					//将生成验证码赋值到显示区
					checkCode.innerHTML = code;
			}
	}
         
//封装函数（随机颜色）
// "code".style.color=randomColor();
// function randomColor(){
// var r=parseInt(Math.random()*256);
// var g=parseInt(Math.random()*256);
// var b=parseInt(Math.random()*256);
// var rgb="rgb("+r+","+g+","+b+")";
// return rgb;
// }

function panduan(){
	var checkCode=document.getElementById("checkCode").innerHTML;
	var inputCode=document.getElementById("inputCode").value;
	// console.log(checkCode);
	// console.log(inputCode);
	var phoneCode=document.getElementById("phoneCode").value;
	var mimaCode=document.getElementById("mimaCode").value;
	// console.log(phoneCode);
	// console.log(mimaCode);
	var zhuce={"mima":mimaCode,"phone":phoneCode}
	console.log(zhuce) 
	if((/^1[3456789]\d{9}$/).test(phoneCode)&&(/^[a-zA-Z0-9]{8,20}$/).test(mimaCode)&&inputCode.toUpperCase()==checkCode.toUpperCase()){
		$.ajax({
			url:`http://127.0.0.1:3000/users`,
			type:"post",
			data:zhuce,
			success:function(result){
				
			window.location.href="http://127.0.0.1:5500/denglu.html"
			}
		})
		// alert("注册成功！")
		// window.location.href="http://127.0.0.1:5501/public/denglu.html"
	}else{
		alert("信息有误！")
	}
	// if(data.toString()="信息有误！"){
	// 		alert(data);
	// 		location.href="denglu.html";
	//	}
}
// 	if (inputCode.length <= 0)
//         {
//             alert("请输入验证码！");
//         }
//         else if (inputCode.toUpperCase() != checkCode.toUpperCase())
//         {
//             alert("验证码输入有误！");
//             createCode(4);
//         }
//         else
//         {
//             alert("验证码正确！");
// 		}	    
// }

//注册手机号正则验证  /^1[3456789]\d{9}$/
$(document).ready(function(){
var arr=[]
$("#phoneCode")
.blur(function(){
	arr=$(".shoujihao>h6");  //数组 0:err 1:suc
	// console.log(arr[0])
 	var a=$("#phoneCode").val();
	// console.log(a);
	if((/^1[3456789]\d{9}$/).test(a)){
		$(arr[1]).css("display","block")
		$(arr[0]).css("display","none")
	}else if(!(/^1[3456789]\d{9}$/).test(a)){
		$(arr[0]).css("display","block")
		$(arr[1]).css("display","none")
	}
	else{
		$(arr[0]).css("display","none")
	}
	var val=($("#phoneCode").val());
	$.ajax({
		url:"http://127.0.0.1:3000/users",
		type:"get",
		success:function(res){
			console.log(res);
			for( var i=0;i<res.length;i++){
				if(res[i].phone.indexOf(val)!=-1){
					$(".suc").css("color","red");
					$(".suc").css("background","url('../imgs/index_img//err.png') no-repeat");
					$(".suc").html("此用户已注册");
				}
			}
		}
	})
});
})
//注册密码验证 /^[a-zA-Z0-9]{8,20}$/
$(document).ready(function(){
var arr1=[]
$("#mimaCode")
.blur(function(){
	arr1=$(".mima>h6");
	// console.log(arr1);
	var b=document.getElementById("mimaCode").value
	// console.log(b);
	if((/^[a-zA-Z0-9]{8,20}$/).test(b)){
		$(arr1[1]).css("display","block")
		// console.log($(arr1[1]))
		$(arr1[0]).css("display","none")
	}else if(!(/^[a-zA-Z0-9]{8,20}$/).test(b)){
		$(arr1[1]).css("display","none")
		$(arr1[0]).css("display","block")
	}else{
		$(arr1[0]).css("display","none")
	}
})
})

//重复注册判断
// $("#phoneCode").blur("input",function(){
// 	var val=($("#phoneCode").val());
// 	$.ajax({
// 		url:"http://127.0.0.1:3000/users",
// 		type:"get",
// 		success:function(res){
// 			console.log(res);
// 			for( var i=0;i<res.length;i++){
// 				if(res[i].phone.indexOf(val)==-1){
// 					$(".err").html("此用户已注册");
// 				}
// 			}
// 		}
// 	})
// })