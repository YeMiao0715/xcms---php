@echo off
cd .>^edit.js
more +5 %0>>^edit.js
move ^edit.js ../../../public/admin/js/%1
exit /b
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