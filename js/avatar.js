$(document).ready(function(){
	var props = {};
	$('#header').css("display", "none");
	$('#content').css("display", "none");
	$('#footer').css("display", "none");
	$('#face').click(get_header);
	$('#eye-right').click(get_header);
	$('#eye-left').click(get_header);
	$('#lips').click(get_header);
	$('#neck').click(get_header);
	$('#ears').click(get_header);
	$('#hair').click(get_header);
	$('#nose').click(get_header);
	$('#eyebrows').click(get_header);

	$('#shirt').click(get_content);
	$('#hands').click(get_content);

	$('#pants').click(get_footer);
	$('#shoes').click(get_footer);

	function get_header()
	{
		$('#header').css("display", "inline");
		$('#content').css("display", "none");
		$('#footer').css("display", "none");
		console.log("test");
	}
	function get_content()
	{
		$('#header').css("display", "none");
		$('#content').css("display", "inline");
		$('#footer').css("display", "none");
		console.log("test");
	}
	function get_footer()
	{
		$('#header').css("display", "none");
		$('#content').css("display", "none");
		$('#footer').css("display", "inline");
		console.log("test");
	}
	$('#dface').click(get_input);
	$('#deye-right').click(get_input);
	$('#deye-left').click(get_input);
	$('#dlips').click(get_input);
	$('#dneck').click(get_input);
	$('#dears').click(get_input);
	$('#dhair').click(get_input);
	$('#dnose').click(get_input);
	$('#deyebrows').click(get_input);

	$('#dshirt').click(get_input);
	$('#dhands').click(get_input);

	$('#dpants').click(get_input);
	$('#dshoes').click(get_input);
	function get_input()
	{
		mofo_var = $(this).attr('class')
		var bg = '';
		var bor = '';
		console.log(props);
		if (props[mofo_var] != undefined)
		{
			console.log("HEEEEEEEEEEEEEEEE");
			if(props[mofo_var].bg != undefined)
				bg = props[mofo_var].bg;
			if(props[mofo_var].bor != undefined)
				bor = props[mofo_var].bor;
		}
		else
			props[mofo_var] = {bg: "", bor: ""};
		console.log(props);
		$('#css-code').html('.' + mofo_var + '{<br>' + bg + '<br>' + bor + '<br><input id="f' + mofo_var + '"><br>}');
		$('#f' + mofo_var).change( function refresh(){
		var elem = $(this).attr('id').substring(1);
			var pval = $('#f' + elem).val();
			if (pval.substr(pval.length - 1) == ';')
				 pval = pval.substr(0, pval.length - 1);
			var val = pval.split(":");
			if(val[0] == "background-color")
			{
				col = val[1];
				if (val[1][1] == ' ')
					col = val[1].substring(1);
				$('#' + elem).css('fill', col);
				props[mofo_var].bg = pval;
				$('#css-code').html('.' + mofo_var + '{<br>' + props[mofo_var].bg + '<br>' + props[mofo_var].bor + '<br><input id="f' + mofo_var + '"><br>}');
			}
			else if(val[0] == "border")
			{

				var ar_val = val[1].split(" ");
				var x = 0;
				console.log(ar_val);
				col = ar_val[0];
				console.log(col);
				if (ar_val[0] == "")
					x++;
				var styles = {
		      	stroke: ar_val[x + 2],
		      	strokeWidth: ar_val[x]
		    	};
				$('#' + elem).css(styles);
				props[mofo_var].bor = pval;
				$('#css-code').html('.' + mofo_var + '{<br>' + props[mofo_var].bg + '<br>' + props[mofo_var].bor + '<br><input id="f' + mofo_var + '"><br>}');
			}
			$('#f' + elem).val("");
		});
	}
});