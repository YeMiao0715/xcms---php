<?php 
namespace app\admin\controller;
use app\common\controller\Base;
use think\Controller;
use think\Request;
use think\Db;

class Sql extends Base{

	public function index(){
		$menu_list = Db::query("show tables");
		$this->assign('menu',$menu_list);
		return $this->fetch();
	}
	public function select($table){
		$field = Db::query("desc $table");
		$list = Db::table($table)->order('id')->select();
		$this->assign('table',$table);
		$this->assign('field',$field); 
		$this->assign('list',$list);
		return $this->fetch();
	}

	public function add(){
		if (Request::instance()->isPost()){
			Db::query(input('post.'));
			// dump(input('post.'));
			die;
		}
		return $this->fetch();
	} 

	public function edit($table){
		// json字符串转对象
		$json_data = json_decode(input('post.data'));
		// json对象转数组
		foreach ($json_data as $key => $value) {
			$data[$key] = $value;
		} 
		Db::table($table)->where('id',$data['id'])->update($data);		
	}

}

 ?>