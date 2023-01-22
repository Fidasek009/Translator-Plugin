const answerURL = "https://raw.githubusercontent.com/Fidasek009/Translator-Plugin/main/answers/answers.json";

// load answers
async function load(){
	const response = await fetch(answerURL);
    window.answers = await response.json();
}


load();

//input
var input = document.querySelector("div[jsname='lKng5e']");

// button
document.querySelector("div[jsname='bl4nBb']").removeAttribute("jsaction");
var button = document.querySelector("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc Rj2Mlf OLiIxf PDpWxe LQeN7 irkilc']");
button.removeAttribute("jsaction");
button.removeAttribute("jscontroller");

button.onclick = function(){
	//console.log(answers);
	alert(answers[input.innerHTML]);
}
