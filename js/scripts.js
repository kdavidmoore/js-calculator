$(document).ready(function() {
	/* $('input').keyup(function(e){
		console.log(e);
	}); */
	document.onkeyup = keyCheck; // executes keyCheck whenever the user presses & releases a key
	
	function keyCheck(){
		var keyID = event.keyCode;
		console.log(keyID);
		switch(keyID) {
			case 49: 
				$('.screen').val('1');
				break;
			case 50:
				$('.screen').val('2');
				break;
			default:
				alert('Huh?');
		}
	}
});