<?php
//PHP music system by digitalirony
$path=$_GET['path'];
//We chop music out of the cwd, and replace it with the path from the .html
$dir = str_replace("music", "$path", getcwd());
//This is the array building loop. For now only does mp3's This looks for all .mp3 files, then splits them down into song title, and type, and filename.
$files = preg_grep("/^\./", scandir($dir), PREG_GREP_INVERT);
foreach ($files as $file){
echo "<a href=\"$file\">$file</a> </br></br>";
}
?>
