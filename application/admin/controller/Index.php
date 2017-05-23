<?php 
namespace app\admin\controller;
use app\common\controller\Base;
use think\Controller;
use think\Request;
use think\Session;
use app\common\model\Cate;

class Index extends Base{
	
	public function index(){
		$Cate = new Cate;
		$list = $Cate->order('sort')->select();
		$this->assign('list',$list);
		return $this->fetch();	
	}

	public function home(){

		return $this->fetch();
	}
	public function out(){
		Session::clear();
		$this->success('已退出！','login/index');
	}
}

 ?>