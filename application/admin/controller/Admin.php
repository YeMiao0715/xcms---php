<?php
namespace app\admin\controller;
use app\common\controller\Base;
use think\Controller;
use think\Request;
use think\Session;
use app\common\model\AdminUser;
use app\common\model\Cate;
 
class Admin extends Base{ 

  public function index(){
    $User = new AdminUser;
    $list = $User->select();
    $this->assign('list',$list);
    return $this->fetch();
  }
 
  public function add(){
    $User = new AdminUser;
    $Cate = new Cate;
    if(Request::instance()->isPost()){
      $data = array(
        'name' => input('post.user'),
        'user' => input('post.user'),
        'password' => md5(input('post.password')),
        'type' => input('post.type'),
        'addtime' => time()
      );
      $User->allowField(true)->save($data);
    }
    $list = $Cate->where('fid',0)->select();
    $this->assign('list',$list);
    return $this->fetch();
  }
 
  public function edit($id){
    $User = new AdminUser;
    $find = $User->where('id',$id)->find();   
    if(Request::instance()->isPost()){
      $data = array(
        'name' => input('post.name'),
        'user' => input('post.user'),
        'password' => md5(input('post.password')),
        'type' => input('post.type'),
        'addtime' => time()
      );
      $User->allowField(true)->save($data,['id' => $id]);
    }    
    $this->assign('list',$find);
    return $this->fetch();   
  }
 
  public function del($id){
    $User = new AdminUser;
    $User->where('id',$id)->delete();
  }
}
?>