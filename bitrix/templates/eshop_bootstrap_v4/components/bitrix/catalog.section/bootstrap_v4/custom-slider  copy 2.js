// $('.slider-nav').slick({ 
// 	infinite: false,
// 	speed: 500,
// 	cssEase: 'linear',
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	allowTouchMove: false,
//   });  	
	
  
$('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	let	count = document.getElementById("slider-track")
		range = document.getElementById("ranger")
	if (nextSlide>currentSlide) {
		console.log(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
		range.value = Math.round(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
		window.value1 = range.value;
	}
	else if (nextSlide<currentSlide) {
		console.log(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
		range.value = Math.round(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
		window.value1 = range.value;
	}
	// console.log(this.slider.current.slick.slideCount);
  });

  $( document ).ready(function() {
	let login = document.getElementById("autorith")
		range = document.getElementById("ranger")
		slider = document.getElementById("slider-track")
		rangePos = 0
		window.value1=range.value
		// rangeProsent = Math.round((slider.style.width.split("px").join("")-window.screen.width)*-0.01)
		window.sliderWidth = slider.childElementCount*slider.querySelectorAll('.slide')[0].style.width.split("px").join("")-window.screen.width+40
		rangeProsent = Math.round(window.sliderWidth*-0.01)
			console.log(window.sliderWidth/Math.round(window.sliderWidth*-0.01),rangeProsent, document.getElementsByClassName("slide")[2].style.width)
		// console.log(slider.childElementCount*slider.firstChild.style.width.split("px").join("")-window.screen.width, slider.style.width.split("px").join("")-window.screen.width, rangeProsent)
		function openAutoruth() {
			if (login.offsetHeight == 330) {
				login.style.height= "0px";
			}
			else {
				login.style.height = "330px"
			}
		}

		function rangeMove() {
			console.log(window.value1, range.value)
			let [rangePos, ty, tz] = slider.style.transform.match(/-*\d+(?=px)/g);
			rangePos=Number(rangePos)
			if (Number(window.value1) < Number(range.value)) {
				for (let index = 0; index < Number(range.value) - Number(window.value1); index++) {
					rangePos += rangeProsent
				}
			}
			else if((Number(window.value1) > Number(range.value)) ) {
				for (let index = 0; index < Number(window.value1) - Number(range.value); index++) {
					console.log(rangePos+"-"+rangeProsent)
					rangePos = rangePos - rangeProsent
				}
			}
			console.log("rangePos "+rangePos, -(window.sliderWidth-100))

			if (rangePos > 0) {
				slider.style.transform = `translate3d(0px, 0px, 0px)`;
				rangePos, range.value = 0
				window.value1 = -1
			}
			else if (rangePos < -(window.sliderWidth-200)) {
				rangePos = -(window.sliderWidth-200)
				console.log(rangePos+'sadq')
				slider.style.transform = `translate3d(${rangePos}px, 0px, 0px)`;
				range.value = Number(range.getAttribute("max"))
				window.value1 = Number(range.getAttribute("max"))+1
				console.log(Number(range.getAttribute("max")), Number(range.getAttribute("max"))+1)
			}
			else {
				slider.style.transform = `translate3d(${rangePos}px, 0px, 0px)`
				window.value1 = range.value
			}
		}
	  
 
	document.getElementById('openautorith').onclick = openAutoruth
	range.oninput = rangeMove
});

