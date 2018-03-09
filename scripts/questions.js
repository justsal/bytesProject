// JavaScript Document

$(document).ready(function(){

	
	
	"use strict";

	//Prehidden stuff	
	$("section.htwelldone").hide();
	$("section.htquestion2").hide();
	$("span.back").hide();
	


//To stats from Nav Menu
	$('.correct').click(function(){
		
		$("section.htquestion1").slideToggle(3000);
		$("section.htquestion2").slideToggle(3000);
		
	
	
									});
	
$('.correct2').click(function(){
		
	$("section.htquestion2").slideToggle(3000);
		$("section.htwelldone").slideToggle(1000);
		

	
	
	
	
								});
});