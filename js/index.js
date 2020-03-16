// 顯示左側選單
let menuIsOpen = false;
let burgerIsClick = false;
let ShowMenu = () => {
	const menu = document.getElementById("navBelow");
	menu.style.visibility = menuIsOpen ? "hidden" : "visible";
	menuIsOpen = !menuIsOpen;
	
	const burger = document.getElementById("burger");
	burger.style.backgroundColor = burgerIsClick ? "#dddddd" : "#cccccc";
	burger.style.borderRadius = "999em";
	burgerIsClick = !burgerIsClick;
}



// 撥放音樂+音量控制
let play = () => {
	audio = document.getElementById("audio");
	audio.play();
	audio.volume = 0.5;
	
	const queryPlayBg = document.getElementById("queryPlayBg");
	queryPlayBg.style.visibility = "hidden";
	
	const myCarousel = document.getElementById("myCarousel");
	myCarousel.style.visibility = "visible";
}

let noPlay = () => {
	const queryPlayBg = document.getElementById("queryPlayBg");
	queryPlayBg.style.visibility = "hidden"; 
	
	const myCarousel = document.getElementById("myCarousel");
	myCarousel.style.visibility = "visible";
}

