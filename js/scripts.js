$(document).ready(function() {

	// prevents the return key from submitting the form
	/* var element = document.querySelector("form");
	element.addEventListener("submit", function(e) {
  		e.preventDefault();
  		alert("Form submission cancelled.");
	}); */

	document.onkeyup = keyCheck; // executes keyCheck whenever the user presses & releases a key

	function keyCheck(e){
		var keyID = e.keyCode;
		console.log(keyID);
		var currScreenVal = $('.screen').val();

		switch(keyID) {
			case 48:
				$('.screen').val(currScreenVal + 0);
				break;
			case 49: 
				$('.screen').val(currScreenVal + 1);
				break;
			case 50:
				$('.screen').val(currScreenVal + 2);
				break;
			case 51:
				$('.screen').val(currScreenVal + 3);
				break;
			case 52:
				$('.screen').val(currScreenVal + 4);
				break;
			case 53:
				$('.screen').val(currScreenVal + 5);
				break;
			case 54:
				$('.screen').val(currScreenVal + 6);
				break;
			case 55:
				$('.screen').val(currScreenVal + 7);
				break;
			case 56:
				$('.screen').val(currScreenVal + 8);
				break;
			case 57:
				$('.screen').val(currScreenVal + 9);
				break;
			case 88: // this is just the character 'x'
				$('.screen').val(currScreenVal + '*');	
				break;			
			case 191: // forward slash in the bottom-right corner of keyboard
				$('.screen').val(currScreenVal + '/');	
				break;				
			case 189: // minus sign to the left of delete and equals
				$('.screen').val(currScreenVal + '-');	
				break;
			case 107: // this only works on a numpad
				$('.screen').val(currScreenVal + '+');	
				break;							
			case 187: //equals sign to the left of delete
				doIt();
				break;
			case 13: // enter or return
				// in Chrome, there is an issue where the enter/return
				// key throws an error to the doIt() function
				e.preventDefault();
				doIt();
				break;
			case 46:
				// delete - only for numpads
				e.preventDefault();
				deleteIt();
				break;
			case 8:
				// backspace - get this working
				// this doesn't work in chrome
				// as the browser goes back to the previous page
				e.preventDefault();
				deleteIt();
				break;
			default:
				console.log("Something went wrong...");
				break;
		}
	}

	// add click listener to buttons
	$('input').click(function(){
		var whichButton = $(this).prop('name');
		var currScreenVal = $('.screen').val();

		switch(whichButton) {
			case 'zero':
				$('.screen').val(currScreenVal + 0);
				break;
			case 'one': 
				$('.screen').val(currScreenVal + 1);
				break;
			case 'two':
				$('.screen').val(currScreenVal + 2);
				break;
			case 'three':
				$('.screen').val(currScreenVal + 3);
				break;
			case 'four':
				$('.screen').val(currScreenVal + 4);
				break;
			case 'five':
				$('.screen').val(currScreenVal + 5);
				break;
			case 'six':
				$('.screen').val(currScreenVal + 6);
				break;
			case 'seven':
				$('.screen').val(currScreenVal + 7);
				break;
			case 'eight':
				$('.screen').val(currScreenVal + 8);
				break;
			case 'nine':
				$('.screen').val(currScreenVal + 9);
				break;
			case 'muchoply': 
				$('.screen').val(currScreenVal + '*');	
				break;			
			case 'divide': 
				$('.screen').val(currScreenVal + '/');	
				break;				
			case 'subtract': 
				$('.screen').val(currScreenVal + '-');	
				break;
			case 'add':
				$('.screen').val(currScreenVal + '+');	
				break;							
			case 'equals':
				doIt();
				break;
			case 'clear':
				$('.screen').val('');
				break;
			default:
				console.log("Something went wrong...");
				break;
		}
	});

	function doIt(){
		try {
			var total = eval($('.screen').val());
		} catch (e){
			console.log(e);
			if (e instanceof SyntaxError) {
				alert("Error: you did not enter a number.");
				return;
			} else if (e instanceof ReferenceError) {
				alert("Error: you cannot enter two operators in a row.");
				return;			
			}
		}
		$('.screen').val(total);

		// Easter Eggs
		var onScreen = $('.screen').val();
		if (onScreen == '360') {
			$('#calculator').addClass('spin');
		} else if (Number(onScreen) > 1000000) {
			window.location = "http://www.google.com/";
		} else if (onScreen == '666') {
			$('#le-container').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WxnN05vOuSM?autoplay=1"></iframe>');
		} else if (onScreen == '180') {
			$('#calculator').addClass('flip');
		} else if (onScreen == '42') {
			$('#calculator').addClass('skewed');
		}
	}

	function deleteIt(){
		var currScreenVal = $('input').val();
		var currScreenValString = currScreenVal.toString();
		var sliced = currScreenValString.slice(0, currScreenValString.length - 1);
		currScreenVal = Number(sliced);
		$('input').val(currScreenVal);
		if (currScreenVal == 0) {
			$('input').val('');
		}
	};
});