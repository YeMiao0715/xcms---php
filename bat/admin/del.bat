@echo off
set a=%1
echo %a%
if %a% equ 1 (goto controller) else goto function
:controller
cd ../../app*/admin/con*
del %3%.php
cd ../view
rd /s /q %2
cd ../../../public/admin/css
rd /s /q %2
cd ../js
rd /s /q %2
cd ../../../../bat/admin
exit /b
:function
cd ../../app*/admin/view/%2
del %3.html
cd ../../../public/admin/css
del %3.css
cd ../js
del %3.js