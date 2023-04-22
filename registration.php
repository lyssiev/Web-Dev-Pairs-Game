<!DOCTYPE html>
<html>

<head>
	<!-- Add the Bootstrap CSS file -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="website.css">
	<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
	<title>User Registration</title>
</head>

<body>
	<div id="main">
		<?php include('navbar.php'); ?>
		<div class="registrationbox">
			<h1 class="pixelfont">User Registration</h1>
			<form method="POST" action="registration_set_cookie.php">
				<label class="pixelfont" for="username">Username:</label>
				<input class="pixelfont" type="text" placeholder="" id="username" name="username" required>
				<input type="submit" name="submit" value="Register" class="btn btn-light mx-3">
				<?php
				// Check if an error message was passed as a URL parameter
				if (isset($_GET['error'])) {
					$error_message = urldecode($_GET['error']);
					echo '<label id="error" for="error">' . $error_message . '</label>';
				}
				?>
			</form>
			<?php include('photo-reel.php'); ?>
			<script src="photo-reel.js"></script>
		</div>
	</div>
	<!-- Add the Bootstrap JavaScript file -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>

</html>