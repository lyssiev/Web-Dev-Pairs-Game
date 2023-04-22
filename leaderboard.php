<!DOCTYPE html>
<html>

<head>
	<!-- Add the Bootstrap CSS file -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<title>Leaderboard</title>
	<link rel="stylesheet" href="website.css">
	<!-- Add the favicon -->
	<link rel="shortcut icon" type="image/x-icon" href="favicon.png">
</head>

<body>
	<div id="main">
		<?php include('navbar.php'); ?>
		<div class="box">
			<h1 class="pixelfont">Leaderboard</h1>
			<!-- Add the Bootstrap JavaScript file -->
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
		</div>
		<div>
			<table>
				<thead>
					<tr>
						<th>Username</th>
						<th>Best Score</th>
					</tr>
				</thead>
				<tbody>
					<?php
					// Read from JSON file
					$json = file_get_contents('leaderboard.json');
					$data = json_decode($json, true);

					// Sorts data with highest score first
					usort($data, function ($a, $b) {
						return $b['score'] - $a['score'];
					});

					// Displays data 
					foreach ($data as $row) {
						echo '<tr>';
						echo '<td>' . $row['username'] . '</td>';
						echo '<td>' . $row['score'] . '</td>';
						echo '</tr>';
					}
					?>
				</tbody>
			</table>
		</div>
	</div>
</body>

</html>