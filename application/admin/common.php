<?php 
	use think\Request; 
	use think\Session;
	use think\Action;


	function jump($url){
		echo "<script>
			location.href = '$url';
		</script>";
	}
	function alert($str){
		echo "<script>
			layer.msg('$str', {
		  	icon: 1
		  	});
		</script>";
	}
	// jump('Login')
?>