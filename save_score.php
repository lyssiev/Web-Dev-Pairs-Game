<?php
// Get the JSON data from the request body
$data = file_get_contents('php://input');

// Decode the JSON data into a PHP array
$newDataArray = json_decode($data, true);

// Read the existing JSON data from the file
$leaderboardFile = file_get_contents('leaderboard.json');
$existingDataArray = json_decode($leaderboardFile, true);

// Append the new data to the existing array
$existingDataArray[] = $newDataArray;

// Encode the updated array as JSON
$encodedData = json_encode($existingDataArray);

// Write the JSON data to the file
file_put_contents('leaderboard.json', $encodedData);

?>