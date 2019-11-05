$("#img1")
.click(function(){
    $(".qrcode-box1")
    .css("display","none")
    $(".qrcode-box2")
    .css("display","block")
})
$("#img2")
.click(function(){
    $(".qrcode-box2")
    .css("display","none")
    $(".qrcode-box1")
    .css("display","block")
});

//账号短信切换登陆
$("#duanxin")
.click(function(){
    $(".qrcode-box2-nei")
    .css("display","none")
    $(".qrcode-box2-neiyin")
    .css("display","block")
})
$("#zhanghao")
.click(function(){
    $(".qrcode-box2-neiyin")
    .css("display","none")
    $(".qrcode-box2-nei")
    .css("display","block")
})


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
var num;
var checkCode=document.getElementById("checkCode").innerHTML;
var inputCode=document.getElementById("inputCode").value;
//console.log(checkCode);
//console.log(inputCode);
var phoneCode=document.getElementById("phoneCode").value
var mimaCode=document.getElementById("mimaCode").value
console.log(phoneCode);
console.log(mimaCode);
var denglu={"phone":phoneCode,"mima":mimaCode}
console.log(denglu)
$.ajax({
	url:`http://localhost:3000/users`,
	type:"get",
	success:function(result){
		//console.log(result);
		for(var i=0;i<result.length;i++){
			//console.log(result[i]);
			if(denglu.phone==result[i].phone&&denglu.mima==result[i].mima&&inputCode.toUpperCase()==checkCode.toUpperCase()){
				num=result[i].id;
				// console.log(num);
			}
		}
		// console.log(num);
		if(!isNaN(num)){
			alert("登录成功");
			document.cookie=phoneCode+";";
			window.location.href="http://127.0.0.1:5500/shouye.html"
			}else{
			alert("登陆失败,账号或密码错误");
		}
	}
})
}
// if (inputCode.length <= 0)
// 			{
// 					alert("请输入验证码！");
// 			}
// 			else if (inputCode.toUpperCase() != checkCode.toUpperCase())
// 			{
// 					alert("验证码输入有误！");
// 					createCode(4);
// 			}
// 			else
// 			{
// 					alert("验证码正确！");
// 			}       
	
 