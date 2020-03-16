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

