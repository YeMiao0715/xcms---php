$(function(){
	$('.edit').click(function(){
		var data = $(this).attr('data');
		layer.open({
			title: '修改',
		  type: 2,
		  content: 'edit/id/'+data,
		  offset: 'r',
		  area: ['calc(100% - 200px)', 'calc(100% - 300px)'],
		  maxmin: true,
		  shade: 0,
		  tipsMore: true,
		  zIndex: layer.zIndex,
		  success: function(layero){
		    layer.setTop(layero);
		  }
		});
		$('input[type=hidden]').val('1');
	});
	//修改完后点击刷新页面
	$(window).click(function(){
		if(!$('body').find('div').hasClass("layui-layer-iframe")){
			if($('input[type=hidden]').val() == 1){
				window.location.reload();
				$('input[type=hidden]').val('0');
			}	
		}
	});
	$('.del').click(function(){
		var del = $(this);
		layer.confirm('你确定要删除', {
		  btn: ['确定','取消'] //按钮
			}, function(){
			  layer.msg('操作成功', {
			  	icon: 1,
			  	offset: 't',
		  	  success: function(){
				    var data = del.attr('data');
				    $.ajax({
				    	url: 'del/id/'+data,
				    	success: function(){
				    		setTimeout(function(){
									window.location.reload();
								},1000);
				    	}
				    });
				  }
			  });
			});
	});
});