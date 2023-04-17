var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");


// color1.setAttribute("value", "#FF0000");
// color2.setAttribute("value", "#FFFF00");

css.textContent = "linear-gradient(to right, "
	 + color1.value + ", " 
	 + color2.value + ")";
	
function setGradient() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value + ", " 
	 + color2.value + ")";

	 css.textContent = body.style.background + ";";
}

function randomGradient() {
	body.style.background = "linear-gradient(to right, "
	 + setBg() + ", " 
	 + setBg() + ")";

	 css.textContent = body.style.background + ";";
}

const setBg = () => {
  return randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomGradient);

btn.addEventListener("click", randomGradient);


