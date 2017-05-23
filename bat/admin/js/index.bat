@echo off
cd .>index.js
more +5 %0>>index.js
move index.js ../../../public/admin/js/%1
exit /b
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
  $('.del').click(function(){
    var del = $(this);
    layer.confirm('你确定要删除', {
      btn: ['确定','取消'] //按钮
    }, function(){
      layer.msg('操作成功', {
        icon: 1,
        success: function(){
          var data = del.attr('data');
          $.ajax({
            url: 'edit/id/'+data
          });
        }
      });
    });
  });
});
