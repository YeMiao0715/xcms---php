$(function(){
	//用来记个数
	var click = 0;
	$('#menu a[class=z]').click(function() {
		//得到一个element对象
		var element = layui.element();
		//找到当前li元素
		var li = $(this).parents('li');
		//找到当前li元素的第一个a标签
		var f_a = li.find('a').first();
		//获取当前li元素的控制器和方法
		var url = window.location.protocol+'//'+window.location.host+'/admin/'+f_a.attr('data')+'/'+$(this).attr('data');
		//获取当前li的文本
		var text = $(this).text();		
		//获取当前屏幕的高度
		var height = $(window).height()-90;
		//判断被点击的元素是否打开过
		var value = 0;
		$.each($('#main').find('li'),function(){
			if($(this).text() == text+'ဆ'){
				value = 1;
				element.tabChange('tab-nav',$(this).attr('lay-id'));
			}
		});		
		//如果没有打开过
		if(!value){
			click += 1;
			//添加一个选项卡			
			element.tabAdd('tab-nav', {
				title: text,
				content: "<iframe src='"+url+"' frameborder='0'"+
				"style='position: absolute;width: 100%;margin:0 auto;left:0;right:0' ></iframe>",
				id: click
			});
			//跳转到当前的选项卡
			element.tabChange('tab-nav',click);
		}
		//为所有ifram加上高度
		$.each($('#main').find('iframe'),function(){
			$(this).css({height: height+'px'});
		});	
	});
	//button点击事件实现menu的隐藏与展开
	$('.button').click(function(){
		if($('#menu').css('display') == 'none'){
			$('#menu').css({
			display: 'block'
			});
			// $('#kuai').css({
			// 	display: 'none'
			// });
			$('#top').css({
				left: 200,
				width: 'calc(100% - 200px)'
			});
			$('#main').css({
				left: 200,
				width: 'calc(100% - 200px)'
			});
		}else{
			$('#menu').css({
				display: 'none'
			});
			// $('#kuai').css({				
			// 	display: 'block'
			// });
			// $('#top').css({
			// 	left: '50px',
			// 	width: 'calc(100% - 50px)'
			// });
			// $('#main').css({
			// 	left: '50px',
			// 	width: 'calc(100% - 50px)'
			// });
			$('#top').css({
				left: 0,
				width: '100%'
			});
			$('#main').css({
				left: 0,
				width: '100%'
			});
		}		
	});
})