$(function(){
	$('form').submit(function(){
		layer.msg('登录成功', {
	  	icon: 1,
	  	success: function(){
	  		setTimeout(function(){
					return true;
				},1000);
	  	}
  	});
	});
});