//your JS code here. If required.
let status = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener('click', ()=> {
	return status.innerHTML = "<h1>Entered Metaverse</h1>";
})