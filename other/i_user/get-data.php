<?php

	//['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']

	$homepage = '';
	$month = 'yanvar';

	for ($i = 1; $i <= 33; $i++) {

		$homepage =  $homepage . '<div data-month="' + + '">' . file_get_contents('http://kakoysegodnyaprazdnik.ru/baza/yanvar/' . $i);

	}

	echo $homepage;

?>