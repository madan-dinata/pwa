document.addEventListener("DOMContentLoaded", function() {
	// Active sidebar nav
	let elems = document.querySelectorAll(".sidenav")
	M.Sidenav.init(elems)
	loadNav()

	function loadNav() {
		let xhttp = new XMLHttpRequest()
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status != 200) return

				// muat daftar tautan menu
				document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
					elm.innerHTML = xhttp.responseText
				})
			}
		}
		xhttp.open("GET", "nav.html", true)
		xhttp.send()
	}

	// Load page content
	let page = window.location.hast.substr(1)
	if (page == "") page = "home"
		loadPage(page)

	function loadPage(page) {
		let xhttp = new XMLHttpRequest()
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
				let content = document.querySelector("#body-content")
				if (this.status == 200) {
					content.innerHTML = xhttp.responseText
				} else if (this.status == 404) {
					content.innerHTML = "<p>Halaman tidak ditemukan.</p>"
				} else {
					content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>"
				}
			}
		}
		xhttp.open("GET", "pages/" + page + ".html", true)	
		xhttp.send()
	}
})