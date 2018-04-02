$(document).ready(function(){



	"use strict";

	//Prehidden stuff
	$("section#quickquizpage").hide();
	$("section#statspage").hide();
	$("span.back").hide();



<!--  Show and hide Navigation Menu  -->



var navMenuShow = 0;
var exButton = 1;

  $(".navButton").click(function(){
    switch(navMenuShow){
      case 0:
          $("#navMenu").slideDown();
          $("section#sal").fadeOut();
          calendarShow=0;
          navMenuShow=1;
          break;
      case 1:
          $("#navMenu").slideUp();
          $("section#sal").fadeIn();
          navMenuShow=0;
          break;
    };
  });

//exit button on Navigation menu

$(".exitNav").click(function(){
    switch(exButton){
      case 0:
          $("#navMenu").slideDown();
          $("section#sal").fadeOut();
          exButton=0;
          break;
      case 1:
          $("#navMenu").slideUp();
          $("section#sal").fadeIn();
          $("#quickquizpage").fadeOut();
          $("#statspage").fadeOut();
          $(".back").fadeOut();
          navMenuShow = 0;
          exButton=1;
          break;
    };
  });



<!--  Show and hide Bytes  -->



var byteDropShow1=0;

$(".byteHomeButton1").click(function(){
    switch(byteDropShow1){
      case 0:
          $(".byteDropdown1").slideDown(100, "linear");
          byteDropShow1=1;
          break;
      case 1:
          $(".byteDropdown1").slideUp(100, "linear");
          byteDropShow1=0;
          break;
    };
});

var byteDropShow2=0;

$(".byteHomeButton2").click(function(){
    switch(byteDropShow2){
      case 0:
          $(".byteDropdown2").slideDown(100, "linear");
          byteDropShow2=1;
          break;
      case 1:
          $(".byteDropdown2").slideUp(100, "linear");
          byteDropShow2=0;
          break;
    };
});



<!--  Show and hide Calendar  -->



var calendarShow = 0;

$("#calendarTab").click(function(){
    switch(calendarShow){
      case 0:
          $("#date").hide();
          $(".byteHomeButton1").hide();
          $(".byteDropdown1").hide();
          $(".byteHomeButton2").hide();
          $(".byteDropdown2").hide();
          byteDropShow1=0;
          byteDropShow2=0;
          $("#calendarTab").hide();
          $("#calendarSpacer").show();
          $(".horizontallines").hide();
          $(".bluerounderbarc").hide();
          $(".whiterounderbarc").hide();
          $("#calendar").fadeIn(150, "linear");
          calendarShow=1;
          break;
      case 1:
          $("#date").show();
          $(".byteHomeButton1").show();
          $(".byteDropdown1").hide();
          $(".byteHomeButton2").show();
          $(".byteDropdown2").hide();
          $("#calendarTab").show();
          $("#calendarSpacer").hide();
          $(".horizontallines").show();
          $(".bluerounderbarc").show();
          $(".whiterounderbarc").show();
          $("#calendar").fadeOut(100, "linear");
          calendarShow=0;
          break;
    };
  });


//exit button on Calendar menu

var calendarExButton=1;

$(".exitCalendar").click(function(){
    switch(calendarExButton){
      case 0:
          $("#date").hide();
          $(".byteHomeButton1").hide();
          $(".byteDropdown1").hide();
          $(".byteHomeButton2").hide();
          $(".byteDropdown2").hide();
          byteDropShow1=0;
          byteDropShow2=0;
          $("#calendarTab").hide();
          $("#calendarSpacer").show();
          $(".horizontallines").hide();
          $(".bluerounderbarc").hide();
          $(".whiterounderbarc").hide();
          $("#calendar").fadeIn(150, "linear");
          calendarExButton=0;
          break;
      case 1:
          $("#calendar").fadeOut(150, "linear");
          $("#date").show();
          $(".byteHomeButton1").show();
          $(".byteDropdown1").hide();
          $(".byteHomeButton2").show();
          $(".byteDropdown2").hide();
          $("#calendarTab").show();
          $("#calendarSpacer").hide();
          $(".horizontallines").show();
          $(".bluerounderbarc").show();
          $(".whiterounderbarc").show();
          calendarShow=0;
          calendarExButton=1;
          break;
    };
  });



<!--  Go to Stats from NavMenu  -->



$(".statnavButton").click(function(){
  $("#navMenu").fadeOut();
    navMenuShow=0;
    $("#sal").fadeOut();
    $("#quickquizpage").fadeOut();
    $("#statspage").fadeIn();
    $("span.back").fadeIn();
    $(".horizontallines").show();
  });



<!--  Go to QuickQuiz from NavMenu  -->



$(".qqnavButton").click(function(){
  $("#navMenu").fadeOut();
    navMenuShow=0;
    $("#sal").fadeOut();
    $("#quickquizpage").fadeIn();
    $("#statspage").fadeOut();
    $(".back").fadeIn();
    $(".horizontallines").show();
  });



<!--  Go to Home from NavMenu  -->



$(".homenavButton").click(function(){
  $("#navMenu").fadeOut();
    navMenuShow=0;
    $("#sal").fadeIn();
    $("#quickquizpage").fadeOut();
    $("#statspage").fadeOut();
    $(".back").fadeOut();
  });



//end ready function
});
