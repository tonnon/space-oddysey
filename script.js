/* 
=========================================================

    View the full screen version for the best effect

    https://codepen.io/Gidean/full/GpZYxO/

=========================================================
*/	





	$( ".cover").delay(1500).fadeOut(2000);


	$( "#mute" ).click(function() {
		$( "img" ).toggle();
	});
var audio = document.getElementById('der_denesende');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);