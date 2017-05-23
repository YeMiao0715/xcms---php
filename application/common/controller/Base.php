<?php 
namespace app\common\controller;
use think\Controller;
use think\Request;
use think\Session;

class Base extends Controller{	
	function __construct(){
		parent::__construct();
		if(Session::has('user')){
			if(Session::get('type') < 0){
				Session::clear();
				$this->success('当前用户没有权限请与管理员核实','login/index');
			}else{
				$time = time();
				if($time - Session::get('ontime') > 3600){
					$this->success('登录超时','login/index');
				}else{
					Session::set('ontime',time());
				}			
			}
		}else{
			$this->success('请你先进行登录','login/index');
		}
	}
}

 ?>