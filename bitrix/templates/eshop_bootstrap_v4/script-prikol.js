$( document ).ready(function() {
	let login = document.getElementById("autorith")
		aside = document.querySelector(".bx-aside-nav")
		// console.log(slider.childElementCount*slider.firstChild.style.width.split("px").join("")-window.screen.width, slider.style.width.split("px").join("")-window.screen.width, rangeProsent)
		function openAutoruth() {
			if (login.offsetHeight == 330) {
				login.style.height= "0px";
			}
			else {
				login.style.height = "330px"
			}
		}
	document.getElementById('openautorith').onclick = openAutoruth

});