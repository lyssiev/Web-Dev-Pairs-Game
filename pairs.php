<!DOCTYPE html>
<html>

<head>
	<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
	<link rel="stylesheet" href="website.css">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<title class="pixelfont">Pairs Game</title>
</head>

<body>
	<div id="main">
		<?php include('navbar.php'); ?>
		<div id="game-board"></div>
		<button type="button" class="btn btn-light mx-auto d-block my-4" id="start-btn">Start Game</button>
	</div>
	<!-- Add the Bootstrap JavaScript file -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="pairs.js"></script>
</body>

</html>