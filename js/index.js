function show_msg() {
	var i;
	var box = document.getElementById('resume')
	if (box.style.display == "none")
	{
		box.style.display = "flex";
	}
	else
		box.style.display = "none";
}