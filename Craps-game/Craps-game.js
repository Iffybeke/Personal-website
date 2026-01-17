const CrapsUsernameInput = "Craps-username-input"
const CrapsGameRegistration = "Craps-game-registration"
const CrapsMainSection = "Craps-main-section"



function registerPlayer() {
	let Crapsusername = alert(document.getElementById("Craps-username-input").value);
alert("Got: " + Crapsusername);
removingRegistrationBox();
showMainGameSection();
}


function removingRegistrationBox() {
document.getElementById("Craps-game-registration").style.display= "none";
}

function showMainGameSection() {
document.getElementById("Craps-main-section").style.display= "block";
}