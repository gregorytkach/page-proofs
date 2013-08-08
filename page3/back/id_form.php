<?php
$id1 = '260559';
$id2 = '476531';


$fp = fopen("id_history.txt", "a+"); // Открываем файл в режиме чтения
if ($fp) 
{

$check_id = fgets($fp, 999);
}

$fp = fopen("id_history.txt", "a+"); // Открываем файл в режиме записи 
ftruncate($fp, 0); // очищаем файл
if ($check_id==$id1) 
	{ $active_id = $id2; } else { $active_id = $id1;}
$to = fwrite($fp, $active_id); // Запись в файл
fclose($fp); //Закрытие файла

?>