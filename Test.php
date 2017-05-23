<?php 
$dir = dirname(__FILE__);
$file = scandir($dir);
// var_dump($file);
$files;
function dir_files($url,$i=0,$k=0){
	foreach ($url as $key => $value) {
		// echo $value;
		if($value != '.' && $value != '..'){
			if(@scandir($value)!=false){
				global $files[] = scandir($value);
				var_dump($files);
				// dir_files(scandir($value));
			}
		}	
	}
}
dir_files($file);


var_dump($files);
?>