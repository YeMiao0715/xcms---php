$(function(){
	$('form').submit(function(){
		parent.layer.msg('操作成功', {
    	icon: 1,
    	shade: 0,
    	offset: 't',
    });		
    setTimeout(function(){
    	element.tabDelete(filter, layid);
    	return true;
    },1000);
	});
});