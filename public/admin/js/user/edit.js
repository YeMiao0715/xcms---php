$(function(){
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