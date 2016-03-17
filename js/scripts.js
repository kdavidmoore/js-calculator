$(document).ready(function() {
	
	document.onkeyup = keyCheck; // executes keyCheck whenever the user presses & releases a key

	function keyCheck(){
		var keyID = event.keyCode;
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
			// laptop keyboards will have problems with the operators
			case 88: 
				$('.screen').val(currScreenVal + '*');	
				break;			
			case 191: 
				$('.screen').val(currScreenVal + '/');	
				break;				
			case 189: 
				$('.screen').val(currScreenVal + '-');	
				break;
			case 107:
				$('.screen').val(currScreenVal + '+');	
				break;							
			case 187:
				//equal sign
				doIt();
				break;
			case 13:
				//enter sign
				doIt();
				break;
			case 46:
				// delete doesn't work yet
				// event.preventDefault();
				var sliced = currScreenVal[0, -1];
				$('.screen').val(sliced);
			case 8:
				// backspace doesn't work yet
				// event.preventDefault();
				var sliced = currScreenVal[0, -1];
				$('.screen').val(sliced);
			default:
				console.log("Something went wrong...");
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
	}
});