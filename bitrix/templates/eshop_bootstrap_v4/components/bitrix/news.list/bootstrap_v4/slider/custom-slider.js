$('.slider-brand').slick({ 
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 9,
	slidesToScroll: 3,
	arrows: false,
	responsive: [
	{
		breakpoint: 1500,
		settings: {
		slidesToShow: 6,
		slidesToScroll: 2,
		}
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	},
	]
  });  	