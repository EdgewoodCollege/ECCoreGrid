$(function() {
//    new Chart(document.getElementById("chartGrads"), {
//        type: 'pie',
//        data: {
//            labels: [],
//            datasets: [{
//
//                backgroundColor: ["#999", "rgba(0,0,0,0)"],
//                data: [85, 15]
//            }]
//        },
//        options: {
//            tooltips: {
//                enabled: false
//            }
//
//
//        }
//    });
//
//	new Chart(document.getElementById("chartGrantsScholarships"), {
//        type: 'pie',
//        data: {
//            labels: [],
//            datasets: [{
//
//                backgroundColor: ["#999", "rgba(0,0,0,0)"],
//                data: [98, 2]
//            }]
//        },
//        options: {
//            tooltips: {
//                enabled: false
//            }
//
//
//        }
//    });

});

AOS.init();

//
//
//jQuery(function($) {
//
//
//initializeEC();
//
//
//function initializeEC(){
//	fillUsers();
//	setupWaypoints();
//
//}
//
//function setupWaypoints(){ //Do things when certain elements come in to viewport
//	var waypoint = new Waypoint({
//		element: document.getElementById('info-value'),
//	  	handler: function(direction) {
//	  		if(direction == 'down'){
//	  			doCount();
//	  			this.destroy();
//	  		}
//	   },
//	   offset:'65%',
//	});
//	var waypoint = new Waypoint({
//		element: document.getElementById('info-prestige'),
//	  	handler: function(direction) {
//	  		if(direction == 'down'){
//	  			showEle(this.element.id);
//	  			this.destroy();
//	  		}
//	   },
//	   offset:'75%',
//	});
//	var waypoint = new Waypoint({
//		element: document.getElementById('info-program-stats'),
//	  	handler: function(direction) {
//	  		if(direction == 'down'){
//	  			showEle(this.element.id);
//	  			this.destroy();
//	  		}
//	   },
//	   offset:'75%',
//	});
//}
//
//function showEle(id){ //Remove the noshow class from an element
//	$('#'+id).removeClass('noshow');
//}
//
//function fillUsers(){ //Dynamically add the user icon multiple times to section
//	var $ug = $('.user-stats .undergrads .users');
//	var markup = '';
//	for(var i = 0;i < 56;i++){
//		if(i % 14 === 0 && i != 0 ){ markup += '<br />'; }
//		if(i < 32){
//			markup += '<i class="fa fa-user filled"></i>';
//		}else{
//			markup += '<i class="fa fa-user"></i>';
//		}
//	}
//	$ug.append(markup);
//}
//
//function doCount(){ //Start counters that count up
//	$('#freshman-stat .count').countTo({
//      from: 0,
//      to: 98,
//      speed: 400,
//      refreshInterval: 1,
//      onComplete: function(value) {
//          
//      }
//  });
//	$('#undergrad-stat .count').countTo({
//      from: 0,
//      to: 85,
//      speed: 400,
//      refreshInterval: 1,
//      onComplete: function(value) {
//          
//      }
//  });
//}
//
//function doCharts(){ //Fill in canvas with google Chart data
//	//Grants Pie Chart
//	var grants_pieData = [
//	   { value:2, color: '#ffffff' },
//	   { value:98, color: '#539dc5' }
//	];
//	var grants_options = {
//		animationSteps : 100,
//		animationEasing : "easeOut",
//		showTooltips: false,
//	};
//	var grants_context = document.getElementById('freshmen-grants').getContext('2d');
//	var grantsChart = new Chart(grants_context).Pie(grants_pieData, grants_options);
//
//	//Graduates Employed Pie Chart
//	var employed_pieData = [
//	   { value:7, color: '#ffffff' },
//	   { value:93,color: '#539dc5' }
//	];
//	var employed_options = {
//		animationSteps : 100,
//		animationEasing : "easeOut",
//		showTooltips: false,
//	};
//	var graduates_context = document.getElementById('graduates-employed').getContext('2d');
//	var grantsChart = new Chart(graduates_context).Pie(employed_pieData, employed_options);
//}
//
//});
//
//
//
//
//
//
//
//
//(function($) {
//	//Counting function
//   $.fn.countTo = function(options) {
//        // merge the default plugin settings with the custom options
//        options = $.extend({}, $.fn.countTo.defaults, options || {});
//
//        // how many times to update the value, and how much to increment the value on each update
//        var loops = Math.ceil(options.speed / options.refreshInterval),
//            increment = (options.to - options.from) / loops;
//
//        return $(this).each(function() {
//            var _this = this,
//                loopCount = 0,
//                value = options.from,
//                interval = setInterval(updateTimer, options.refreshInterval);
//
//            function updateTimer() {
//                value += increment;
//                loopCount++;
//                $(_this).html(value.toFixed(options.decimals));
//
//                if (typeof(options.onUpdate) == 'function') {
//                    options.onUpdate.call(_this, value);
//                }
//
//                if (loopCount >= loops) {
//                    clearInterval(interval);
//                    value = options.to;
//
//                    if (typeof(options.onComplete) == 'function') {
//                        options.onComplete.call(_this, value);
//                    }
//                }
//            }
//        });
//    };
//
//    $.fn.countTo.defaults = {
//        from: 0,  // the number the element should start at
//        to: 100,  // the number the element should end at
//        speed: 1000,  // how long it should take to count between the target numbers
//        refreshInterval: 100,  // how often the element should be updated
//        decimals: 0,  // the number of decimal places to show
//        onUpdate: null,  // callback method for every time the element is updated,
//        onComplete: null,  // callback method for when the element finishes updating
//    };
//})(jQuery);