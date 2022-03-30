
$('.slider-nav').slick({ 
	infinite: false,
	speed: 500,
	cssEase: 'linear',
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
  });  	
	
  
$('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	let	count = document.getElementById("slider-one").firstChild.firstChild.childElementCount
		range = document.getElementById("ranger")
	if (nextSlide>currentSlide) {
		console.log(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
		range.value = Math.ceil(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
		window.value1 = range.value;
	}
	else if (nextSlide<currentSlide) {
		console.log(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
		range.value = Math.ceil(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
		window.value1 = range.value;
	}
	// console.log(this.slider.current.slick.slideCount);
  });

  $( document ).ready(function() {
	let login = document.getElementById("autorith")
		range = document.getElementById("ranger")
		slider = document.getElementById("slider-one").firstChild.firstChild
		rangePos = 0
		window.value1=range.value
		rangeProsent = Math.ceil((slider.style.width.split("px").join("")-window.screen.width)*-0.01)
		// rangeProsent = Math.ceil((slider.childElementCount*slider.firstChild.style.width.split("px").join("")-window.screen.width)*-0.01)
		console.log(slider.childElementCount*slider.firstChild.style.width.split("px").join("")-window.screen.width, slider.style.width.split("px").join("")-window.screen.width, rangeProsent)
		function openAutoruth() {
			if (login.offsetHeight == 330) {
				login.style.height= "0px";
			}
			else {
				login.style.height = "330px"
			}
		}

		function rangeMove() {
			console.log(window.value1)
			let [tx, ty, tz] = []
			if (Number(window.value1) < Number(range.value)) {
				for (let index = 0; index < Number(range.value) - Number(window.value1); index++) {
					[tx, ty, tz] = slider.style.transform.match(/-*\d+(?=px)/g);
					rangePos = Number(tx)+rangeProsent
					slider.style.transform = "translate3d("+rangePos+"px, 0px, 0px)"
				}
				window.value1 = range.value
			}
			else {
				for (let index = 0; index < Number(window.value1) - Number(range.value); index++) {
					[tx, ty, tz] = slider.style.transform.match(/-*\d+(?=px)/g);
					rangePos = Number(tx)-rangeProsent
					slider.style.transform = "translate3d("+rangePos+"px, 0px, 0px)"
				}
				window.value1 = range.value
			}
		}
	  
 
	document.getElementById('openautorith').onclick = openAutoruth
	range.oninput = rangeMove
});
