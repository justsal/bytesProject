// JavaScript Document

$(document).ready(function(){

	
	
	"use strict";

	//Prehidden stuff	
	$("section.htwelldone").hide();
	$("section.htquestion2").hide();
	$("span.back").hide();
	$(".incorrectanimfade").hide();
	
	
$('.incorrect').click(function(){
		$(".incorrectanimfade").show();
		$("section.htquestion1").slideUp(1000);
		$("section.htquestion2").slideUp(1000);
		$(".incorrectanimfade").delay(3000).slideUp(1000);
		
	
	
		});
	
	$('.incorrect').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

		$("section.htquestion1").slideUp(1000);
		$("section.htquestion2").slideUp(1000);
		$(".incorrectanimfade").delay(3000).slideUp(1000);
		
    setTimeout(function(){
         window.location = goTo;
    },3000);       
}); 
	

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