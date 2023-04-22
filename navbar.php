<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="website.css">
</head>

<body>
    <div class="navbar">
        <?php
        if (isset($_COOKIE['username'])) {
            // if the username is set, include link to leaderboard
            echo '<a class="navbar-link" name="home" href="index.php">Home</a>';
            echo '<a class="navbar-link navbar-link-right" href="pairs.php" name="memory">Play Pairs</a>';
            echo '<a class="navbar-link navbar-link-right" href="leaderboard.php" name="leaderboard">Leaderboard</a>';
            if (isset($_COOKIE['avatar'])) {
                // Displays avatar and username
                $avatarData = json_decode($_COOKIE['avatar'], true);
                $eyes = $avatarData['eyes'];
                $mouth = $avatarData['mouth'];
                $skin = $avatarData['skin'];
                echo '<div class="navbar-avatar"><img src="emoji-assets/skin/' . $skin . '.png" alt="User Avatar"></div>';
                echo '<div class="navbar-avatar"><img src="emoji-assets/eyes/' . $eyes . '.png" alt="User Avatar"></div>';
                echo '<div class="navbar-avatar"><img src="emoji-assets/mouths/' . $mouth . '.png" alt="User Avatar"></div>';
                echo '<span class="navbar-username">' . $_COOKIE['username'] . '</span>';
            } else {
                //default avatar
                echo '<div class="navbar-avatar"><img src="emoji-assets/skin/green.png" alt="User Avatar"></div>';
                echo '<div class="navbar-avatar"><img src="emoji-assets/eyes/long.png" alt="User Avatar"></div>';
                echo '<div class="navbar-avatar"><img src="emoji-assets/mouths/open.png" alt="User Avatar"></div>';
                echo '<span class="navbar-username">' . $_COOKIE['username'] . '</span>';
            }
        } else {
            // if user has not registered, display link to registration page
            echo '<a class="navbar-link" name="home" href="index.php">Home</a>';
            echo '<a class="navbar-link navbar-link-right" name="memory" href="pairs.php">Play Pairs</a>';
            echo '<a class="navbar-link navbar-link-right" name="register" href="registration.php">Register</a>';
        }
        ?>
    </div>
</body>

</html>