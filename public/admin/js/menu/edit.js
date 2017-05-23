$(function(){
	$('.function').hide();
	if($(".layui-unselect .layui-anim dd").attr('lay-value') == '0'){
		$('.controller').show();
		$('.function').hide();
	}
	if($(".layui-unselect .layui-anim dd").attr('lay-value') != '0'){
		$('.controller').hide();
		$('.function').show();
	}
	$('form').submit(function(){
		parent.layer.msg('操作成功', {
    	icon: 1,
    	shade: 0,
    	offset: 't'
    });
		var index = parent.layer.getFrameIndex(window.name);	
		parent.layer.close(index);
	});

	 
});