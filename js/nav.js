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
})