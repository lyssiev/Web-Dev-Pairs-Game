# Pairs Game
ECM1417 Module - Web development
Grade: 79%, First

_This was a project I completed for my web development module in the first year of my course at Uni of Exeter. We were tasked with creating a website where users could play a 'pair matching' game with all of the features listed below. In this project I developed my HTML, CSS, PHP and Javascript skills, as well as working with a virtual machine using Microsoft Azure._

## Features:
Landing page: index.php (navbar.php, website.css)
- if registered, 'click here to play' button appears
- if not, hyperlink to register page
- favicon of pink emoji added (all pages)
- bootstrap buttons (all pages)
- navbar to navigate between pages - if registered, 
  link to leaderboard, else link to register (all pages)
- 'arcade-like' font (all pages)
	
Registration page: registration.php (photo-reel.php, registration_set_cookie.php,
photo-reel.js)
- COMPLEX implementation
- if there is an error with username (invalid set)
  then error message cookie set
- avatar selection: photo reels, when clicked blue outline
  on feature
- default avatar (first images) if not chosen
- username and avatar on right of navbar when registered,
  redirects to homepage.

Pairs game: pairs.php (pairs.js)
- MEDIUM implementation
- random emojis added to cards
- when completed, score is shown and 2 buttons created
- submit: sends POST request to json file (leaderboard.json)
- play again: resets game
- if player is not registered, only play again is shown

Leaderboard: (leaderboard.php)
- reads data from json file
- sorts by highest score

