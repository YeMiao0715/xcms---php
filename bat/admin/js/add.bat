@echo off
cd .>add.js
more +5 %0>>add.js
move add.js ../../../public/admin/js/%1
exit /b
$(function(){
  $('form').submit(function(){
    layer.msg('操作成功', {
      icon: 1,
      offset: 't'
    });
  });
});