@echo off
rem %1为大写的控制器名字
cd .>%1%.php
echo.^<?php>%1%.php
echo.namespace app\admin\controller;>>%1%.php
echo.use think\common\controller\Base;>>%1%.php
echo.use think\Controller;>>%1%.php
echo.use think\Request;>>%1%.php
echo. >>%1%.php
echo.class %1 extends Base{ >>%1%.php
more +13 %0>>%1%.php
move %1%.php ../../application/admin/controller 
exit /b
  public function index(){
 
    return $this->fetch();
  }
 
  public function add(){
    
    if(Request::instance()->isPost()){

    }
    return $this->fetch();
  }
 
  public function edit($id){

    if(Request::instance()->isPost()){

    }
 
    return $this->fetch();
  }
 
  public function del($id){
 
  }
}
?>