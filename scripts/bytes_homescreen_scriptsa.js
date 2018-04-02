$(document).ready(function(){


<!--  Show and hide Navigation Menu  -->



var navMenuShow = 0;
var exButton = 1;

  $(".navButton").click(function(){
    switch(navMenuShow){
      case 0:
          $("#navMenu").slideDown();
          navMenuShow=1;
          break;
      case 1:
          $("#navMenu").slideUp();
          navMenuShow=0;
          break;
    };
  });

//exit button on Navigation menu

$(".exitNav").click(function(){
    switch(exButton){
      case 0:
          $("#navMenu").slideDown();
          exButton=0;
          break;
      case 1:
          $("#navMenu").slideUp();
          navMenuShow = 0;
          exButton=1;
          break;
    };
  });



<!--  Go to Stats from NavMenu  -->



$(".statnavButton").click(function(){
  $("#navMenu").fadeOut();
  navMenuShow=0;
  window.location.href="index.html#statspage";
  $("#sal").hide();
  $("#quickquizpage").hide();
  $("#statspage").fadeIn();
  $("span.back").fadeIn();
  $(".horizontallines").show();
  });



<!--  Go to QuickQuiz from NavMenu  -->



$(".qqnavButton").click(function(){
  $("#navMenu").fadeOut();
    navMenuShow=0;
    window.location.href="index.html#quickquizpage";
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
    window.location.href="index.html";
    $("#sal").fadeIn();
    $("#quickquizpage").fadeOut();
    $("#statspage").fadeOut();
    $(".back").fadeOut();
    $(".horizontallines").hide();
  });



//end ready function
});

