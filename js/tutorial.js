$(document).ready(function(){
	var cborc = "#000000";
	var cbors = "1";
	var cbgc = "#000000"
	var cmargg = "0";
	var cmargd = "0";
	var cmargh = "0";
	var cmargb = "0";
	var bgc = document.getElementById("bgc");
	var borc = document.getElementById("borc");
	var bors = document.getElementById("bors");
	var mockup = document.getElementById("mockup");
	var svgsil = document.getElementById("svgsil");
	var margg = document.getElementById("margg");
	var margb = document.getElementById("margb");
	var margd = document.getElementById("margd");
	var margh = document.getElementById("margh");
	$('#bors').rangeslider();
	function refresh()
	{
		var styles = {
		fill: '#' + cbgc,
		stroke: '#' + cborc,
		strokeWidth: cbors + 'px'
		//borderStyle: 'solid'
		};
		svgsil.style.marginLeft = cmargg + "px";
		svgsil.style.marginRight = cmargd + "px";
		svgsil.style.marginBottom = cmargb + "px";
		svgsil.style.marginTop = cmargh + "px";
		$('#mockup').css(styles);
		// document.getElementById("test-div").style.border =  cbors + 'px solid #' + cborc;
	}
	bgc.onclick = pickcolor('bgc');
	borc.onclick = pickcolor('borc');
	bors.onchange = function changesize()
	{
		cbors = $("#bors").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"border: " + cbors + "px solid #" + cborc + "\"";
		refresh();
	}
	margg.onchange = function changemargg()
	{
		cmargg = $("#margg").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"margin-left: " + cmargg + "px \"";
		refresh();
	}

	margd.onchange = function changemargd()
	{
		cmargd = $("#margd").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"margin-right: " + cmargd + "px \"";
		refresh();
	}

	margh.onchange = function changemargh()
	{
		cmargh = $("#margh").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"margin-top: " + cmargh + "px \"";
		refresh();
	}

	margb.onchange = function changemargb()
	{
		cmargb = $("#margb").val();
		document.getElementById("css-command").innerHTML = "Vous venez de reproduire le comportement de la ligne : \"margin-bottom: " + cmargb + "px \"";
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
});