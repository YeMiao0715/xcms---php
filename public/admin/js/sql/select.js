$(function(){
	//td的双击事件
	$('td').dblclick(function(){
		// 获取被双击的数据
		var data = $(this).text();
		// 将被双击的td变成input框并赋值
		$(this).html("<input class='input' type='text' value="+data+">");
		// 为一个被隐藏的input框赋值
		$('input[class=text_data]').val(data);
		// 为当前input框获取焦点
		$('input[class=input]').focus();
	});
	// 窗口的点击事件
	$(window).click(function(){
		// 判断当前table中有没有input框
		if($('input').hasClass("input")){
			// 获取被变成input框的值
			var data = $('.input').val();
			// 判断隐藏的input中的值与被变成input框的值是否一样
			if($('input[class=text_data]').val() != data){
				// 建立一个数组用来放table中每列的标题
				var field = new Array();
				// 建立一个数组用来放被变成input框这一行的值
				var data_list = new Array();
				// 获取当前的表的数据表名
				var table_name = $('input[class=table_name]').val();
				// 获取被变成input框的tr父类
				var tr = $('.input').parent().parent();
				// 获取被变成input框中被改变的值
				$('.input').parent().text(data);	
				// 遍历当前行的所有内容并放到data_list数组中
				$.each(tr.find('td'),function(i,d){
					data_list[i] = $(this).text();	
			  });
			  // 遍历所有列的标题并写成json字符串
			  var json = '{';
			  $("th").each(function(i,d){
			  	json += "\""+$(this).text()+"\":\""+data_list[i]+"\",";  					
			  });		  
			  // 删除json字符串中最后一个逗号。
			  json = json.substring(0,json.length-1);
				json += '}';
			  //定位url
			  var url_data = window.location.protocol+'//'+window.location.host+'/admin/sql/';
			  //ajax提交
			  $.ajax({
			  	type: 'POST',
				 	url: url_data+'edit/table/'+table_name,				 	
				 	data: {data:json},
			  })
			}		
		}
	});
});