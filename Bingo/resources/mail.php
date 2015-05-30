<?php 

	$name = $_GET['name'];
	$words = $_GET['words'];
	$description = $_GET['description'];

	$charset = "1251";

	$message = 'name:'.$name.'words:'.$words.'description:'.$description;

	mail("web.best.master@gmail.com", "Bingo - proposition", $message);

	echo $message;

?>