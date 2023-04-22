<?php
if (isset($_POST['submit'])) {
	$username = $_POST['username'];
	// Check for invalid characters in the username
	if (preg_match('/[\'^£$%&*()}{@#~?<>,|=_+¬-]/', $username)) {
		$error_message = "Invalid username, please try again!";
		$error_message = urlencode("Invalid username, please try again!");
		// Redirect back to registration.php with the error message
		header("Location: registration.php?error=$error_message");
	} else {
		// Set the cookie with the username
		setcookie("username", $username, time() + 3600, "/");
		// Redirect the user to the home page
		header("Location: index.php");
		exit();
	}
}
?>