$(function(){
	$('.z').hide();
	$('.f').click(function(){
		if($('.z').css("display") == 'none'){
			$('.z').show();
			$(this).find('i').first().html('&#xe625;')
			$(this).find('i').first().next().html('&#xe624;');
		}else{
			$('.z').hide();
			$(this).find('i').first().html('&#xe623;')
			$(this).find('i').first().next().html('&#xe622;');
		}
	});
	$('.table').click(function(){
		var data = $(this).attr('data');
		//弹出表
		layer.open({
			title: data+'表',
		  type: 2,
		  content: 'select/table/'+data,
		  offset: 'r',
		  area: ['calc(100% - 200px)', '300px'],
		  maxmin: true,
		  shade: 0,
		  tipsMore: true,
		  zIndex: layer.zIndex, //重点1
		  success: function(layero){
		    layer.setTop(layero); //重点2
		  }
		});
	});
	$('.add').click(function(){		
		//弹出表
		layer.open({
			title: '添加表',
		  type: 2,
		  content: 'add',
		  area: ['400px', '300px'],
		  maxmin: true,
		  shade: 0,
		  tipsMore: true,
		  zIndex: layer.zIndex, //重点1
		  success: function(layero){
		    layer.setTop(layero); //重点2
		  }
		});
	});
})