// CACHE THE DOM!
var human_score = 0;
var robot_score = 0;
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function game(humanChoice){
    
    // COMPUTER CHOICE
    var choice_arr = ['rock', 'paper', 'scissors'];
    var choice = Math.floor(Math.random()*3);

    // var computer_choice = choice_arr[choice];
    
    switch(choice) {
        case 0:
            // CHANGE OUT PLACEHOLDER IMG W/ ROBOT-ROCK
            document.getElementById('robot').src='./images/robot-rock.png';
            if (humanChoice == 'rock') {
                document.getElementById("text").innerHTML = 'It\'s a draw.';
                document.getElementById("text").style.color= 'cyan';
                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
            } else if (humanChoice == 'paper') {
                document.getElementById("text").innerHTML = 'Human wins.';
                document.getElementById("text").style.color= 'greenyellow';

                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
                human_score++;
                document.getElementById("human-score").innerHTML = human_score;
            } else {
                document.getElementById("text").innerHTML = 'Computer wins';
                document.getElementById("text").style.color= 'firebrick';
                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
                robot_score++;
                document.getElementById("robot-score").innerHTML = robot_score;
            }
        break;
        case 1:
            // CHANGE OUT PLACEHOLDER IMG W/ ROBOT-PAPER
            document.getElementById('robot').src='./images/robot-paper.png';
        if (humanChoice == 'rock') {
            document.getElementById("text").innerHTML = 'Computer wins';
            document.getElementById("text").style.color= 'firebrick';
            document.getElementById("result").style.display= 'block';
            setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
            robot_score++;
            document.getElementById("robot-score").innerHTML = robot_score;
        } else if (humanChoice == 'paper') {
            document.getElementById("text").innerHTML = 'It\'s a draw.';
            document.getElementById("text").style.color= 'cyan';

            document.getElementById("result").style.display= 'block';
            setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
        } else {
            document.getElementById("text").innerHTML = 'Human wins.';
            document.getElementById("text").style.color= 'greenyellow';
            document.getElementById("result").style.display= 'block';
            setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
            human_score++;
            document.getElementById("human-score").innerHTML = human_score;
            }
        break;
        case 2:
            // CHANGE OUT PLACEHOLDER IMG W/ ROBOT-SCISSORS
            document.getElementById('robot').src='./images/robot-scissors.png';            
            if (humanChoice == 'rock') {
                document.getElementById("text").innerHTML = 'Human wins.';
                document.getElementById("text").style.color= 'greenyellow';
                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
                human_score++;
                document.getElementById("human-score").innerHTML = human_score;
            } else if (humanChoice == 'paper') {
                document.getElementById("text").innerHTML = 'Computer wins';
                document.getElementById("text").style.color= 'firebrick';
                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
                robot_score++;
                document.getElementById("robot-score").innerHTML = robot_score;
            } else {
                document.getElementById("text").innerHTML = 'It\'s a draw.';
                document.getElementById("text").style.color= 'cyan';

                document.getElementById("result").style.display= 'block';
                setTimeout(function(){document.getElementById('result').style.display = 'none';}, 1500);
            }
        break;
      }};

// game('rock');


function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
        // CHANGE OUT PLACEHOLDER IMG W/ HUMAN-ROCK
        document.getElementById('human').src='./images/human-rock2.png';
    });
    paper_div.addEventListener('click', function(){
        game("paper");
        // CHANGE OUT PLACEHOLDER IMG W/ HUMAN-PAPER
        document.getElementById('human').src='./images/human-paper2.png';
    });
    scissors_div.addEventListener('click', function(){
        game("scissors");
        // CHANGE OUT PLACEHOLDER IMG W/ HUMAN-SCISSORS
        document.getElementById('human').src='./images/human-scissors2.png';
    });
}

main();