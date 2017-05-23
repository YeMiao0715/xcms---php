@echo off
set a=%1
echo %a%
if %a% equ 1 (goto controller) else goto function

:controller
cd bat/admin
call ^md.bat %2
call php.bat %3
cd html
call add.bat %2
call ^edit.bat %2
call index.bat %2
cd ../js
call add.bat %2
call ^edit.bat %2
call index.bat %2
exit /b
:function
cd bat/admin/html
call new.bat %2 %3
cd ../js
call new.bat %2 %3
exit  /b
