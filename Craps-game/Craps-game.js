const CrapsUsernameInput = "Craps-username-input"
const CrapsGameRegistration = "Craps-game-registration"
const CrapsMainSection = "Craps-main-section"



function registerPlayer() {
	let Crapsusername = document.getElementById("Craps-username-input").value;

	//username validation check
	let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
	if (Crapsusername.length < 5 || firstCharIsDigitRegex.test(Crapsusername)) {
		alert("Your character must be at least 5 characters long, alphanumeric only (a-z/A-Z/0-9), have no spaces and cannot start with a number!"); 
	 } else {
		removingRegistrationBox();
		showMainGameSection();}
	}

function removingRegistrationBox() {
document.getElementById("Craps-game-registration").style.display= "none";
}

function showMainGameSection() {
document.getElementById("Craps-main-section").style.display= "block";
}