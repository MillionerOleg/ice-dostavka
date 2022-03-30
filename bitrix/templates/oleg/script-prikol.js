window.onload = function() {
	let filter = document.getElementById("product-list")
		title = document.getElementById("serv_title")
		btnList = document.getElementById("style-list")
		btnGrid = document.getElementById("style-grid")
		section = document.querySelector(".catalog-section")
		sidebar = document.getElementById("top-menu")
		contacts = document.getElementById("contacts")
		shadow = document.getElementById("shadow-all")

		function openNav() {
			if (document.documentElement.clientWidth < 776) {
				if (sidebar.offsetWidth == 300) {
					sidebar.style.width = "0px";
				}
				else {
					sidebar.style.width = "100%"
				}
			}
		}
	  
		function closeNav() {
		  sidebar.style.width = "0";
		}

		function openContacts() {
			if (document.documentElement.clientWidth < 776) {
				if (contacts.offsetHeight == 300) {
					contacts.style.height = "0px";
					shadow.style.display = "none"
					document.body.style.overflow = "unset"
				}
				else {
					contacts.style.height = "300px"
					shadow.style.display = "block"
					document.body.style.overflow = "hidden"
				}
			}
		}

	if (document.documentElement.clientWidth < 992 && document.documentElement.clientWidth > 576) {
		section.classList.add("style-list")
	}
  
	function openFilter() {
		title.classList.toggle("marked")
		if (filter.classList.contains('closed')) {
			filter.classList.add('opened')
			filter.classList.remove('closed')
		}
		else {
			filter.classList.add('closed')
			filter.classList.remove('opened')
		}
	}

	function swapStyle () {
		section.classList.add("style-list")
		localStorage.setItem('style-list', true);
	}

	if (localStorage.getItem('style-list')) {
		swapStyle()
	}

	function swapStyleBack () {
		section.classList.remove("style-list")
		localStorage.removeItem('style-list');
	}
 
	title.onclick = openFilter
	btnList.onclick = swapStyle 
	btnGrid.onclick = swapStyleBack
	document.getElementById('openbtn').onclick = openNav
	document.getElementById('closebtn').onclick = closeNav
	document.getElementById('openbtn-contacts').onclick = openContacts
	shadow.onclick = openContacts

}