// $('.slider-nav').slick({ 
// 	infinite: false,
// 	speed: 500,
// 	cssEase: 'linear',
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	allowTouchMove: false,
//   });  	
	
  
// $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
// 	let	count = document.getElementById("slider-track")
// 		range = document.getElementById("ranger")
// 	if (nextSlide>currentSlide) {
// 		console.log(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
// 		range.value = Math.round(nextSlide*range.getAttribute("max")/2*(nextSlide-currentSlide))
// 		window.value1 = range.value;
// 	}
// 	else if (nextSlide<currentSlide) {
// 		console.log(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
// 		range.value = Math.round(nextSlide*range.getAttribute("max")/2*(currentSlide-nextSlide))
// 		window.value1 = range.value;
// 	}
// 	// console.log(this.slider.current.slick.slideCount);
//   });

$( document ).ready(function() {
	if (document.querySelector('.slider')){
	  let slider = document.querySelector('.slider'),
  
		sliderTrack = slider.querySelector('.slider-track'),
		slides = slider.querySelectorAll('.slide'),
		range = document.getElementById('ranger'),
		sliderBox = document.getElementById('slider-box'),
		slideWidth = slides[0].offsetWidth,
		slideIndex = 0,
		posInit = 0,
		posX1 = 0,
		posX2 = 0,
		posFinal = 0,
		scrollPos = 0,
		posThreshold = slides[0].offsetWidth * 0.35,
		trfRegExp = /([-0-9.]+(?=px))/
	
		getEvent = function() {
		  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
		},
		slide = function() {
			sliderTrack.style.transition = 'transform .5s';
	  
		  sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
		},
		swipeStart = function() {
		  let evt = getEvent();
			  style = sliderTrack.style.transform
			  transformInit = +style.match(trfRegExp)[0]
	  
		  posInit = posX1 = evt.clientX;
	  
		  sliderTrack.style.transition = '';
	  
		  document.addEventListener('touchmove', swipeAction);
		  document.addEventListener('mousemove', swipeAction);
		  document.addEventListener('touchend', swipeEnd);
		  document.addEventListener('mouseup', swipeEnd);
		},
		swipeAction = function() {
		  console.log("delta", window.event.deltaX, window.event.deltaY, window.event.deltaZ)
		  let evt = getEvent(),
			style = sliderTrack.style.transform,
			transform = +style.match(trfRegExp)[0];
		  posX2 = posX1 - evt.clientX;
		  posX1 = evt.clientX;
		  posFinal = posInit - posX1;
		  console.log("transform "+(transform - posX2), "posInit", posInit, "posX1", posX1, " | ", posFinal)
	  
		  console.log(transform - posX2, window.screenScroller[Number(range.getAttribute("max"))-1], Number(range.getAttribute("max"))-1)
		  if (transform - posX2 > 0){
			sliderTrack.style.transform = `translate3d(0px, 0px, 0px)`;
		  }
		  else if (transform - posX2 < window.screenScroller[Number(range.getAttribute("max"))-1]) {
			console.log(window.sliderWidth)
			sliderTrack.style.transform = `translate3d(${window.screenScroller[Number(range.getAttribute("max"))-1]}px, 0px, 0px)`;
		  }
		  else {
			sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
		  }
	  
		  if (window.screenScroller.includes(Math.floor(transform)) || window.screenScroller.includes(Math.ceil(transform))){
			range.value = Number(window.screenScroller.indexOf(transform))
			window.value1 = Number(window.screenScroller.indexOf(transform))
		  }
		  console.log(range.value, window.screenScroller.indexOf(transform))
		},
		swipeEnd = function() {
		  
		  console.log(posInit,posX1,posFinal)
	  
		  document.removeEventListener('touchmove', swipeAction);
		  document.removeEventListener('mousemove', swipeAction);
		  document.removeEventListener('touchend', swipeEnd);
		  document.removeEventListener('mouseup', swipeEnd);
	  
		  
	  
		  //   if (posInit < posX1) {
		  //     slideIndex--;
		  //   } else if (posInit > posX1) {
		  //     slideIndex++;
		  //   }
	  
		  // if (posInit !== posX1) {
		  //   slide();
		  // }
		};
	  
		scrollAction = function() {
		  console.log("delta", window.event.deltaX, window.event.deltaY, window.event.deltaZ)
		  
		  if (window.event.deltaY > 0){ 
			range.value = Number(range.value)+5
		  }
		  else if (window.event.deltaY < 0){ 
			range.value = Number(range.value)-5
		  }
	  
		  sliderTrack.style.transform = `translate3d(${window.screenScroller[Number(range.value)]}px, 0px, 0px)`;
		  console.log(window.screenScroller[range.value], sliderTrack.style.transform, "ranger", range.value, range.value)
		  let evt = getEvent(),
			style = sliderTrack.style.transform,
			transform = +style.match(trfRegExp)[0];
		  
		  if (window.screenScroller.includes(Math.floor(transform)) || window.screenScroller.includes(Math.ceil(transform))){
			range.value = Number(window.screenScroller.indexOf(transform))
			window.value1 = Number(window.screenScroller.indexOf(transform))
		  }
	  
	  
		  console.log(range.value, window.screenScroller.indexOf(transform))
		}
  
		if (window.screen.width<1500 && window.screen.width>=992) {
		  for (let index = 0; index < sliderTrack.childElementCount; index++) {
			slides[index].style.width = String(window.screen.width*0.5)+"px"
			console.log(window.screen.width, slides[index].style.width)
		  }
		}
		else if (window.screen.width<992 && window.screen.width>=768) {
		  for (let index = 0; index < sliderTrack.childElementCount; index++) {
			slides[index].style.width = String(window.screen.width*0.8)+"px"
			console.log(window.screen.width, slides[index].style.width)
		  }
		}
		else if (window.screen.width<768) {
		  for (let index = 0; index < sliderTrack.childElementCount; index++) {
			slides[index].style.width = String(window.screen.width)+"px"
			console.log(window.screen.width, slides[index].style.width)
		  }
		}
		else {
		  for (let index = 0; index < sliderTrack.childElementCount; index++) {
			slides[index].style.width = String(window.screen.width*0.333333)+"px"
			console.log(window.screen.width)
		  }
		}
  
		slider.style.width=window.screen.width
		sliderTrack.style.width=window.screen.width
	  
		sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
	  
		slider.addEventListener('touchstart', swipeStart);
		slider.addEventListener('mousedown', swipeStart);
		
		sliderBox.addEventListener("wheel", scrollAction)
		sliderBox.addEventListener('mouseenter', e => {
		  document.querySelector("body").style.overflow = "hidden"
		  document.querySelector("body").style.paddingRight = "17px"
		})
		sliderBox.addEventListener('mouseleave', e => {
		  document.querySelector("body").style.overflow = "unset"
		  document.querySelector("body").style.paddingRight = "0px"
		})
	  
	}
	  });
   
  $( document ).ready(function() {
	let range = document.getElementById("ranger")
	  slider = document.getElementById("slider-track")
	  rangePos = 0
	  window.value1=range.value
	  // rangeProsent = Math.round((slider.style.width.split("px").join("")-window.screen.width)*-0.001)
	  window.sliderWidth = ((slider.childElementCount+1)*slider.querySelectorAll('.slide')[0].style.width.split("px").join("")-window.screen.width)
	  rangeProsent = Math.round(window.sliderWidth*-0.001)
	  window.screenScroller = []
	  console.log(slider.querySelectorAll('.slide')[0].style.width.split("px").join(""), window.screenScroller, "|", window.sliderWidth, window.sliderWidth/Math.round(window.sliderWidth*-0.001),rangeProsent, document.getElementsByClassName("slide")[2].style.width)
	for (let index = 0; index < range.getAttribute("max"); index++) {
	  if (index==0){
		window.screenScroller[index] = 0
	  }
	  else {
		window.screenScroller[index] = window.screenScroller[index-1] + rangeProsent
	  }
	}
  
	function rangeMove() {
	  console.log(window.value1, range.value, "AAAAAAA")
	  let [rangePos, ty, tz] = slider.style.transform.match(/-*\d+(?=px)/g);
		maxPos = (range.getAttribute("max")*rangeProsent)
	  rangePos = window.screenScroller[range.value]
  
	  slider.style.transform = `translate3d(${rangePos}px, 0px, 0px)`
	  window.value1 = range.value
	
	}
  
	range.oninput = rangeMove
  });
		



