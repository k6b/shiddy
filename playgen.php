<?php
//Created by digitalirony find me on freenode, if you have questions. But you shouldn't this is pretty small and not very complex.
//this part is important so the player will recognize it as json. Comment this line out if testing output, or send output to a file
header("Content-Type: application/json");
//must pass path= to this file, where path is the REQUEST_URI of a directory containing MP3's
$path=$_GET['path'];
//We chop music out of the cwd, and replace it with the path from the .html
$dir = str_replace("music", "$path", getcwd());
//This is the array building loop. For now only does mp3's This looks for all .mp3 files, then splits them down into song title, and type, and filename.
$files = preg_grep("/\.mp3/",scandir($dir));
foreach ($files as $key => $single){
//this part is important, some filenames include multiple periods or (.).
 $split_song=explode('.', "$single");
 $playlist["$single"]["type"]= array_pop($split_song);
 $playlist["$single"]["title"]= implode($split_song);
}
//This way we don't add at ',' to the end of the last playlist entry, the player doesn't like that
//This is the main playlist building loop. 
if (isset($playlist)){

$last = count($playlist);
$i = 1;
echo '{"playlist":[';
foreach ($playlist as $single => $kind){
    $song= str_replace( " ", "%20","$single");
    $title= $playlist["$single"]["title"];
    $type= $playlist["$single"]["type"];
    if ($last == $i ){
	    echo '{"0":{"src":"'.$song.'","type":"audio\/'.$type.'"},"config":{"title":"'.$title.'"}}';
	}else
	{
		echo '{"0":{"src":"'.$song.'","type":"audio\/'.$type.'"},"config":{"title":"'.$title.'"}},';
	}
	$i++;
    }
echo ']}';
}
?>

