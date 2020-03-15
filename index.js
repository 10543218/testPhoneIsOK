// 顯示左側選單
let menuIsOpen = false;
let ShowMenu = () => {
	const menu = document.getElementById("navBelow");
	menu.style.visibility = menuIsOpen ? "hidden" : "visible";
	menuIsOpen = !menuIsOpen;
}
