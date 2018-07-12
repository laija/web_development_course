'use-strict'

$(document).ready(function(){
	reloadLink()
	$('#add_button').click(function(){
		$('#menu').prepend('<li><a href="' + $("#add_link").val()+'"></a></li>');
		$("#add_link").val('');
		reloadLink()		

	});

	function reloadLink(){
		$('a').each(function(index){
			var that = $(this);
			var enlace= $(this).attr("href");
			that.attr('target','_blank'); // mopen in a new tab 
			that.text(enlace);
		});
	}
})