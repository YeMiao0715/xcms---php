@echo off
cd .>%2.js
cd .>%2.css
more +7 %0>>%2.js
move %2.js ../../../public/admin/js/%1
move %2.css ../../../public/admin/css/%1
exit /b
$(function(){

});