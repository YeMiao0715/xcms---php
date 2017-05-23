<?php
namespace app\index\controller;
use think\Controller;
class Index extends Controller
{
    public function index()
    {
   //      echo "
			// <script>
			// 	location.href= 'admin/index';
			// </script>
   //      ";

    	$m = new MongoClient();
    	$db = $m->runoob;
    	$document = array(
    		'title' => 'php测试',
    		'data' => 'hahahah'
    	);

    	$collection->insert($document);
    	echo "数据插入成功！";



    	// return $this->fetch();
    }
}
