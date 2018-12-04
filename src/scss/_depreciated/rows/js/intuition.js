$(function () {
	var actSlider = document.getElementById('actSlider');
	var actValueDisplay = document.getElementById('actValueDisplay');
	var gpaSlider = document.getElementById('gpaSlider');
	var gpaValueDisplay = document.getElementById('gpaValueDisplay');
	var actValue;
	var gpaValue;
	var RAI;
	$('#level1').hide();
	$('#level2').hide();
	$('#level3').hide();
	$('#level4').hide();
	$('#level5').hide();
	$('#level6').hide();
	$('special').hide();
	$('input[type=range]')
		.rangeslider({
			polyfill: false
		})

	.on('change', function () {
		actValue = actSlider.value;
		actValueDisplay.innerHTML = actValue;
		gpaValue = gpaSlider.value;
		gpaValueDisplay.innerHTML = gpaValue;
		RAI = (actValue * 1.3889) + (gpaValue * 12.5);
		RAIDisplay.innerHTML = RAI;
//		if (gpaValue >= 3.5 && actValue >= 24) {
//			console.log('got it');
//			$('#calculator').animate({'background-position-y': '50%'}, 1000, 'linear'); 
//		} else {
//			$('#calculator').animate({'background-position-y': '-500%'}, 1000, 'linear');
//			}
		
//		if (gpaValue >= 3.5 && actValue >= 24) {
//		}
//		if (RAI > 84) {
//			//RAIDisplay.className = "green";
//			//$('#calculator').addClass("calculatorImage");
//			$("#level1, #level2, #level3, #level4, #level5, #qualify").fadeOut(750).promise().done(function () {
//				$("#level6").fadeIn(300);
//			});
//		}
//		
		
		if ((RAI >= 79 ) || (gpaValue >= 3.5 && actValue >= 24)) {
//		if ((RAI >= 79 && RAI <= 83.9) || (gpaValue >= 3.5 && actValue >= 24)) {
//		if ((RAI >= 79 && RAI <= 83.9) || (gpaValue >= 3.5 && actValue >= 24)) {
			//RAIDisplay.className = "green";
			$("#level1, #level2, #level3, #level4, #level6, #qualify").fadeOut(750).promise().done(function () {
				$("#level5").fadeIn(300);
				//('#calculator').animate({'background-position-y': '50%'}, 1000, 'linear');
			});
		}
		if ((RAI >= 75 && RAI <= 78.9) && !(gpaValue >= 3.5 && actValue >= 24)) {
			$("#level1, #level2, #level3, #level5, #level6, #qualify").fadeOut(750).promise().done(function () {
				$("#level4").fadeIn(300);
				//$('#calculator').animate({'background-position-y': '-500%'}, 1000, 'linear');
			});
		}
		if ((RAI >= 71 && RAI <= 74.9) && !(gpaValue >= 3.5 && actValue >= 24)) {
			$("#level1, #level2, #level4, #level5, #level6, #qualify").fadeOut(750).promise().done(function () {
				$("#level3").fadeIn(300);
				//$('#calculator').animate({'background-position-y': '-500%'}, 1000, 'linear');
			});

		}
		if ((RAI >= 65 && RAI <= 70.9) && !(gpaValue >= 3.5 && actValue >= 24)){
			$("#level1, #level3, #level4, #level5, #level6, #qualify").fadeOut(750).promise().done(function () {
				$("#level2").fadeIn(300);
				//$('#calculator').animate({'background-position-y': '-500%'}, 1000, 'linear');
			});

		}
		if ((RAI <= 64.9) && !(gpaValue >= 3.5 && actValue >= 24)){
			//RAIDisplay.className = "";
			$("#level2, #level3, #level4, #level5, #level6, #qualify").fadeOut(750).promise().done(function () {
				$("#level1").fadeIn(300);
				//$('#calculator').animate({'background-position-y': '-500%'}, 1000, 'linear');
			});

		}




	});
});

// 6 levels
