let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("comp_score");
const scoreboard_div = document.querySelector(".score_board"); 
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randNumber = Math.floor(Math.random() * 3);
	return choices[randNumber];
}
 
function convertToWord(letter){
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	if (letter == "s") return "Scissors"; 
}

function win(user, comp){
	userscore++;
	//const u = "user".fontsize(3).sub();
	///const c = "comp".fontsize(3).sup();
	userscore_span.innerHTML = userscore;
	compscore_span.innerHTML = compscore;
	result_p.innerHTML = `${convertToWord(user)}(user) beats ${convertToWord(comp)}(comp) you win!!!`;
	document.getElementById(user).classList.add("green_glow");
	setTimeout(function() {document.getElementById(user).classList.remove("green_glow")}, 300);
	//es6
	//setTimeout(() => document.getElementById(user).classList.remove("green_glow"), 300);
}

//setTimeout(function() {console.log("hello"), 3000});

function lose(user, comp){
	compscore++;
	userscore_span.innerHTML = userscore;
	compscore_span.innerHTML = compscore;
	result_p.innerHTML = `${convertToWord(comp)}(comp) beats ${convertToWord(user)}(user) you lose!!!`;
	document.getElementById(user).classList.add("red_glow");
	setTimeout(function() {document.getElementById(user).classList.remove("red_glow")}, 300);
}

function draw(user, comp){
	userscore_span.innerHTML = userscore;
	compscore_span.innerHTML = compscore;
	result_p.innerHTML = "It's a draw!!!";
	document.getElementById(user).classList.add("grey_glow");
	setTimeout(function() {document.getElementById(user).classList.remove("grey_glow")}, 300);
}

function game(userChoice) {
	const compChoice = getComputerChoice();
	switch(userChoice + compChoice) {
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, compChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}

main();
