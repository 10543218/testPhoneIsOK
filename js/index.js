// 顯示左側選單
let menuIsOpen = false;
let burgerIsClick = false;
let ShowMenu = () => {
	const navBelow = document.getElementById("navBelow");
	navBelow.style.visibility = menuIsOpen ? "hidden" : "visible";
	menuIsOpen = !menuIsOpen;
	
	const burger = document.getElementById("burger");
	burger.style.backgroundColor = burgerIsClick ? "#4267b2" : "#4267b2";
	burger.style.borderRadius = "999em";
	burgerIsClick = !burgerIsClick;
	
	const prev = document.getElementById("prev");
	const Next = document.getElementById("Next");
	const carouselIndicators = document.getElementById("carouselIndicators");
	const carouselDashOne = document.getElementById("carouselDashOne");
	const carouselDashTwo = document.getElementById("carouselDashTwo");
	const carouselDashThree = document.getElementById("carouselDashThree");
	
	prev.style.visibility = menuIsOpen ? "hidden" : "visible";
	Next.style.visibility = menuIsOpen ? "hidden" : "visible";
	carouselIndicators.style.visibility = menuIsOpen ? "hidden" : "visible";
	carouselDashOne.style.visibility = menuIsOpen ? "hidden" : "visible";
	carouselDashTwo.style.visibility = menuIsOpen ? "hidden" : "visible";
	carouselDashThree.style.visibility = menuIsOpen ? "hidden" : "visible";
}



// 顧客選擇撥放音樂+音量控制
// let isPlay = false;
// let play = () => {
	// audio = document.getElementById("audio");
	// audio.play();
	// audio.volume = 0.5;
	
	// const queryPlayBg = document.getElementById("queryPlayBg");
	// queryPlayBg.style.visibility = "hidden";
	
	// const myCarousel = document.getElementById("myCarousel");
	// myCarousel.style.visibility = "visible";
	
	// const stopOrPlay = document.getElementById("stopOrPlay");
	// stopOrPlay.value ="播放中";
	// isPlay = true;
	
// }

// let noPlay = () => {
	// const queryPlayBg = document.getElementById("queryPlayBg");
	// queryPlayBg.style.visibility = "hidden"; 
	
	// const myCarousel = document.getElementById("myCarousel");
	// myCarousel.style.visibility = "visible";
// }


// 手動點選播放音樂
let isPlay = false;    //如果上面打開 這行就要刪掉
let stopOrPlay = () => {
	const audio = document.getElementById("audio");
	if(!isPlay){
		audio.play();
	}else{
		audio.pause();
	}
	
	const stopOrPlay = document.getElementById("stopOrPlay");
	stopOrPlay.value = isPlay ?  "已暫停": "播放中";
	isPlay = !isPlay;
}

// 手動調整音樂大小
let changeSoundNumber = () => {
	const changeSoundNumber = document.getElementById("changeSoundNumber");
	const audio = document.getElementById("audio");
	audio.volume = changeSoundNumber.value;
}


// 關閉左側 menu
let closeMenu = () => {
	const burger = document.getElementById("burger");
	burger.click();
}



// 打開註冊畫面
let showRegisteredPage = () => {
	window.location.href="register.html";
}

// 打開登入頁面
let showLoginPage = () => {
	window.location.href="login.html";
}

let closeRegisteredPage = () => {
	const registeredPage = document.getElementById("registeredPage");
	registeredPage.style.visibility = "hidden";
}










