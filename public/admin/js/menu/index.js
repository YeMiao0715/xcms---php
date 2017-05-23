$(function(){
	$('tr[class=z]').hide();
	//修改按钮跳转
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
	//删除按钮跳转
	$('.del_f').click(function(){
		var data = $(this).attr('data');
		layer.confirm("<font style='color:red'>你正在删除一级分类<br>"+
			"这样会删除对应的控制器文件<br>"+
			"和相关的模板文件夹<br>"+
			"请尽量不要做删除操作</font>",{
			title: "<font style='color:red'>警告</font>",
			btn: ['确定', '取消'],
			success: function(){
				$('.layui-layer-btn0').css({
					'border-color': 'red',
					'background-color': 'red'
				});
			}
		},function(){
			layer.msg('操作成功',{
				icon:1,
				offset: 't',
				success: function(){
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
	$('.del').click(function(){
		var data = $(this).attr('data');
		layer.confirm('你确定要删除',{
			title: "提示",
			btn: ['确定', '取消'],
			icon: 3,
		},function(){
			layer.msg('操作成功',{
				icon:1,
				offset: 't',
				success: function(){
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
	//展开效果
	$('a[class=unfold]').click(function(){
		var data = $(this).attr('data');		
		var a_this = $(this);
		$('tr[data='+data+']').each(function(){			
			if($(this).css("display") == "none"){
				$(this).show();
				a_this.find('i').html('&#xe619;');
			}else{
				$(this).hide();
				a_this.find('i').html('&#xe61a');
			}
	  });
	});
});