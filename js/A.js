

$(function(){

	var NOW=0;
	var MOVE=0;
	var WIDTH=380;

	$("#BTN01").click(function(){
		$("#ALL").stop(true,false).animate({left:0},1000,"easeOutBack");
	});
	$("#BTN02").click(function(){
		$("#ALL").stop(true,false).animate({left:-380},1000,"easeOutBack");
	});

	
});

/*
$(function(){

	$("#RK_BOX").stop(true,false).animate({top:"-=50"},7000,"easeOutCirc").fadeTo(400,0.6).fadeTo(600,1).fadeTo(400,0.2).fadeTo(600,0.8).fadeOut(800);
	$("#LIGHTBOX").css({display:"block"},8000);
	
	$("#LIGHTBOX").click(function(){
		$("#LIGHTBOX").css({display:"none"});
		$("#RK_BOX").css({display:"none"});
	});
	
	
});
*/

$(document).ready(function () {
  	$("#RK_BOX").stop(true,false).animate({top:"-=50"},7000,"easeOutCirc").fadeTo(400,0.6).fadeTo(600,1).fadeTo(400,0.2).fadeTo(600,0.8).fadeOut(800);
  	$("#LIGHTBOX").css({display:"block"},8000);
  
  	setTimeout(function(){
    	$("#LIGHTBOX").css({display:"none"});
		$("#RK_BOX").css({display:"none"});
  	}, 9000); 

  	$("#LIGHTBOX").click(function(){
		$("#LIGHTBOX").css({display:"none"});
		$("#RK_BOX").css({display:"none"});
	});      
});





