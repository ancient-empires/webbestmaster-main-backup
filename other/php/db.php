<?php

	$host = "localhost";
	$username = "u307528083_test";
	$password = "ZAQ!2wsxCDE#";
	$database = "u307528083_test";
	$table =  "test_table";

	mysql_connect($host, $username, $password) or die(mysql_error());

	echo "connected<br>";

	mysql_select_db($database) or die(mysql_error());

	echo  "connected to db<br>";

	mysql_query("INSERT INTO $table (id, username) VALUES (DEFAULT, 'cat')") or die(mysql_error());
	mysql_query("INSERT INTO $table (id, username) VALUES (DEFAULT, 'cat_2')") or die(mysql_error());
	mysql_query("INSERT INTO $table (id, username) VALUES (DEFAULT, 'cat_3')") or die(mysql_error());
	mysql_query("INSERT INTO $table (id, username) VALUES (DEFAULT, 'cat_4')") or die(mysql_error());
	mysql_query("INSERT INTO $table (id, username) VALUES (DEFAULT, 'cat_5')") or die(mysql_error());


	echo  "insert to db<br>";


?>