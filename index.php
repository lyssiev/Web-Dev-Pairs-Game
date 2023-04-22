<!DOCTYPE html>
<html>

<head>
    <!-- Add the Bootstrap CSS file -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Welcome to Pairs</title>
    <!-- Add favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="favicon.png">
</head>

<body>
    <div id="main">
        <?php include('navbar.php'); ?>
        <div class="box">
            <h1 class="pixelfont">Welcome to Pairs</h1>
            <?php
            //checks if user is registered using username 
            if (isset($_COOKIE['username'])) {
                echo '<a href="pairs.php" class="btn btn-light">Click here to play</a>';
            } else {
                echo '<p class="pixelfont">You\'re not using a registered session? <a href="registration.php">Register now</a></p>'; //if not, provides a hyperlink
            }
            ?>
            <!-- Add the Bootstrap JavaScript file -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </div>
    </div>
</body>

</html>