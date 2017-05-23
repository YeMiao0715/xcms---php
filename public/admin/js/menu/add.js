$(function(){
	$('.function').hide();
	$(".layui-unselect .layui-anim dd").click(function(){
		if($(this).attr('lay-value') != '0'){
			$('.controller').hide();
			$('.function').show();
		}else if($(this).attr('lay-value') == '0'){
			$('.controller').show();
			$('.function').hide();
		}
	});
	$('form').submit(function(){
		layer.msg('操作成功', {
	  	icon: 1,
	  	offset: 't'
  	});
  });
});