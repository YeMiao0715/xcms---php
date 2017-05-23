<?php 
namespace app\admin\controller;
use app\common\controller\Base;
use think\Controller;
use think\Request;
use app\common\model\Cate;
use think\Db;

class Menu extends Base{

	public function index(){
		$Cate = new Cate;
		$list = $Cate->order('sort')->select();
		$this->assign('list',$list);
		return $this->fetch();
	}
	public function add(){
		$Cate = new Cate;
		if(Request::instance()->isPost()){
			if(input('post.bat')){
				/*
					启动批处理器进行添加
					内容包括控制器：控制器中有方法4个,分别是index,add,edit,del。对应查增改删。
					控制器的模板目录及文件：文件有index.html,add.html和edit.html。
					同时给模板中写入必要的内容。
					同时在static/admin/css的目录中建立与之相关的css文件
					同时在static/admin/js的目录中建立与之相关的js文件
				*/				
				if(input('post.controller')){
					$contr = input('post.controller');
					$contr_u = ucfirst($contr);
					exec("add.bat 1 $contr $contr_u");
					//添加一个一级分类和两个二级分类
					$Cate->allowField(true)->save(input('post.'));
					$fid = $Cate->id;
					$list = [
						['name'=>'列表','fid'=>$fid,'function'=>'index','sort'=>0,'show'=>1],
						['name'=>'添加','fid'=>$fid,'function'=>'add','sort'=>1,'show'=>1]
					];
					$Cate->saveAll($list);
				}
				if(input('post.function')){
					// 在父类文件夹内的建立一个模板文件和相关的css、js文件
					$find = $Cate->where('id',input('post.fid'))->find();
					$contr = $find['controller'];
					$func = input('post.function');
					exec("add.bat 0 $contr $func");
					//添加一个子类
					$Cate->allowField(true)->save(input('post.'));
				}		
			}
		}
		$list = $Cate->select();
		$this->assign('list',$list);		
		return $this->fetch();
	}
	public function edit($id){
		$Cate = new Cate;
		$f_cate = Db::name('cate')->where('fid',0)->select();
		foreach ($f_cate as $key => $value) {
			$f_list[$value['id']] = $value['name'];
		}		
		$list = $Cate->where('id',$id)->find();
		// dump($list);
		if(Request::instance()->isPost()){
			//修改
			$Cate->save(input('post.'),['id' => $id]);
			die;
		}
		$this->assign('f_cate',$f_list);
		$this->assign('list',$list);
		return $this->fetch();
	}
	public function del($id){
		$Cate = new Cate;
		//删除
		$find = $Cate->where('id',$id)->find();
		//判断是否是一级分类,find['fid'] = 0 为一级分类
		if($find['fid']){
			$f_find = $Cate->where('id',$find['fid'])->find();
			// 删除在父类文件夹内的一个模板文件和相关的css、js文件
			$contr = $f_find['controller'];
			$func = $find['function'];
			exec("del.bat 0 $contr $func");
			$Cate->where('id',$id)->delete();
		}else{
			//先删除子类，后删除父类
			$Cate->where('fid',$id)->delete();
			$Cate->where('id',$id)->delete();
			//启动批处理器进行删除
			//删除一个控制器和三个与之相关的目录
			//目录有与之相关的模板目录,css目录,js目录
			$contr = $find['controller'];
			$contr_u = ucfirst($contr);
			exec("del.bat 1 $contr $contr_u");		
		}
	}
}?>