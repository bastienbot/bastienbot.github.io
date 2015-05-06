$(document).ready(function(){
	var cborc = "#000000";
	var cbors = "1";
	var cbgc = "#000000"
	var bgc = document.getElementById("bgc");
	var borc = document.getElementById("borc");
	var bors = document.getElementById("bors");
	var mockup = document.getElementById("mockup");
	$('#bors').rangeslider();
	function refresh()
	{
		var styles = {
		fill: '#' + cbgc,
		stroke: '#' + cborc,
		strokeWidth: cbors + 'px'
		//borderStyle: 'solid'
		};
		$('#mockup').css(styles);
		// document.getElementById("test-div").style.border =  cbors + 'px solid #' + cborc;
	}

	bgc.onclick = pickcolor('bgc');
	borc.onclick = pickcolor('borc');
	bors.onchange = function changesize()
	{
		console.log($("#bors").val());
		console.log(bors);
		cbors = $("#bors").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"border: " + cbors + "px solid #" + cborc + "\"";
		refresh();
	}
	function pickcolor(src)
	{
		$('#' + src).ColorPicker({
			color: '#0000ff',
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				if (src == "bgc")
				{
					cbgc = hex;
					document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"background-color: #" + hex + "\"";
				}
				else if (src == "borc")
				{
				cborc = hex;
				document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"" + cbors + "px solid #" + hex + "\"";
				}
				refresh();
			}
		});
	}
}