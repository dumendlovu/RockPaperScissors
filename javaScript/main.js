//Const Variables
let userScore = 0;
let compScore = 0;
const _userScoreSpan = document.getElementById('user-score');
const _compScoreSpan = document.getElementById('comp-score');
const _scoreBoardDiv = document.querySelector('score-board');
const _resultsDiv = document.querySelector('.result > p');
const _clockSpan = document.getElementById('clock');
const _rock = document.getElementById('Rock');
const _paper = document.getElementById('Paper');
const _scissors = document.getElementById('Scissors');
const _lizard = document.getElementById('Lizard');
const _spock = document.getElementById('Spock');
const _reset = document.getElementById('resetBTN');

main();

function main() {
  //EventListeners
  activateBTN();
  _reset.addEventListener('click', function() {
    userScore = 0;
    _userScoreSpan.innerHTML = userScore;
    compScore = 0;
    _compScoreSpan.innerHTML = compScore;
    _resultsDiv.innerHTML ="Ready";
  });
}

function game(usersChoice) {
  const compChoice = getCompChoice();
  switch (usersChoice + compChoice) {
    case 'ScissorsPaper':
    case 'PaperRock':
    case 'RockLizard':
    case 'LizardSpock':
    case 'SpockScissors':
    case 'ScissorsLizard':
    case 'LizardPaper':
    case 'PaperSpock':
    case 'SpockRock':
    case 'RockScissors':
      win(usersChoice, compChoice);
      break;
    case 'PaperScissors':
    case 'RockPaper':
    case 'LizardRock':
    case 'SpockLizard':
    case 'ScissorsSpock':
    case 'LizardScissors':
    case 'PaperLizard':
    case 'SpockPaper':
    case 'RockSpock':
    case 'ScissorsRock':
      lose(usersChoice, compChoice);
      break;
    case 'RockRock':
    case 'ScissorsScissors':
    case 'PaperPaper':
    case 'LizardLizard':
    case 'SpockSpock':
      draw(usersChoice, compChoice)
      break;
  }
}
function getCompChoice() {
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const randomNum = Math.floor(Math.random() * 5);
  return choices[randomNum];
}
//result handling
function win(uC, cC) {
  const smUser = "Player".fontsize(3).sup();
  const smComp = "CPU".fontsize(3).sup();
  const userChoose = document.getElementById(uC).classList;
  userScore++;
  _userScoreSpan.innerHTML = userScore;
  _resultsDiv.innerHTML = `${uC} ${smUser} beats ${cC} ${smComp}. You Win` ;
  userChoose.add('green-glow');
  setTimeout(() => userChoose.remove('green-glow'), 800);
  clockTimer();
}
function lose(uC, cC) {
  const smUser = "Player".fontsize(3).sup();
  const smComp = "CPU".fontsize(3).sup();
  const userChoose = document.getElementById(uC).classList;
  compScore++;
  _compScoreSpan.innerHTML = compScore;
  _resultsDiv.innerHTML = `${cC} ${smComp} beats ${uC} ${smUser} . You Lose` ;
  userChoose.add('red-glow');
  setTimeout(() => userChoose.remove('red-glow'), 800);
  clockTimer();
}
function draw(uC, cC) {
  const smUser = "Player".fontsize(3).sup();
  const smComp = "CPU".fontsize(3).sup();
  const userChoose = document.getElementById(uC).classList;
  _resultsDiv.innerHTML = `${uC} ${smUser} Draws with ${cC} ${smComp}. It's a Tie` ;
  userChoose.add('gray-glow');
  setTimeout(() => userChoose.remove('gray-glow'), 1500);
  clockTimer();
}
function clockTimer() {
  var timeleft = 3;
  var downloadTimer = setInterval(function(){
    document.getElementById("clock").innerHTML = timeleft;
    timeleft--;
    if(timeleft == 0){
      document.getElementById("clock").innerHTML = "Make Your Move"
      clearInterval(downloadTimer);
    }
  }, 1000);
}
function activateBTN() {
  _rock.addEventListener('click', () => game("Rock"));
  _paper.addEventListener('click', () => game("Paper"));
  _scissors.addEventListener('click',() => game("Scissors"));
  _lizard.addEventListener('click', () => game("Lizard"));
  _spock.addEventListener('click', () => game("Spock"));
}
