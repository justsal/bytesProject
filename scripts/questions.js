// JavaScript Document

$(document).ready(function(){

	
	
	"use strict";

	//Prehidden stuff	
	$("section.htwelldone").hide();
	$("section.htquestion2").hide();
	$("span.back").hide();
	


//To stats from Nav Menu
	$('.correct').click(function(){
		
		$("section.htquestion1").slideToggle(1000);
		$("section.htquestion2").slideToggle(1000);
		$(".correctanimfade").delay(3000).slideUp(1000);
	
	
		});

	

	
$('.correct2').click(function(){
		
	$("section.htquestion2").slideToggle(1000);
		$("section.htwelldone").slideToggle(1000);
		

	
	
	
	
	});
	
	$(".done").click(function(){
		$("section.htwelldone").slideToggle(1000);
		
		
		
	});
	
	
	
	
	
});