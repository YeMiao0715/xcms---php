<?php 
namespace app\admin\controller;
use think\Controller;
use think\Request;
use think\Session;
use app\common\model\AdminUser;

class Login extends Controller{

	public function index(){
		$User = new AdminUser;
		if(Request::instance()->isPost()){

			$find = $User->where('user',input('post.user'))->find();
			if($find){
				if($find['password'] = md5(input('post.password'))){
					Session::set('user',input('post.user'));
					Session::set('type',$find['type']);
					Session::set('ontime',time());
					$this->success('登录成功','index/index');
					die;
				}
			}else{
				$this->error('用户名或密码错误','login/index');	
				die;			
			}
		}
		return $this->fetch();
	}

	public function data(){


	}
}