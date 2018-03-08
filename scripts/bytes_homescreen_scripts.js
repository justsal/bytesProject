$(document).ready(function(){

//byte collapse -->

"use strict";
    $(".byteHomeButton1").click(function(){
          $(".byteDropdown1").animate({
            height: 'toggle'
          });
    });

    $(".byteHomeButton2").click(function(){
          $(".byteDropdown2").animate({
            height: 'toggle'
          });
    });



//<!-- navMenu collapse -->


    $(".navButton").click(function(){
        $("#date").animate({
          height: 'toggle'},
          1000
        );
        $(".byteHomeButton1").animate({
          height: 'toggle'},
          1000
        );
        $(".byteDropdown1").hide();
        $(".byteHomeButton2").animate({
          height: 'toggle'},
          1000
        );
        $(".byteDropdown2").hide();
        $("#navMenu").animate({
          height: 'toggle'},
          1000
        );
        $("#calendarTab").animate({
          height: 'toggle'},
          1000
        );
        $(".horizontallines").animate({
          height: 'toggle'},
          1000
        );
        $("#bannerSpacer").animate({
          height: 'toggle'},
          1000
        );
    });

    $(".exitIcon1").click(function(){
        $("#date").animate({
          height: 'toggle'},
          1000
        );
        $(".byteHomeButton1").animate({
          height: 'toggle'},
          1000
        );
        $(".byteDropdown1").hide();
        $(".byteHomeButton2").animate({
          height: 'toggle'},
          1000
        );
        $(".byteDropdown2").hide();
        $("#navMenu").animate({
          height: 'toggle'},
          1000
        );
        $("#calendarTab").animate({
          height: 'toggle'},
          100
        );
        $(".horizontallines").animate({
          height: 'toggle'},
          1000
        );
        $("#bannerSpacer").animate({
          height: 'toggle'},
          1000
        );
    });






//<!-- calendar collapse -->



      $("#calendarTab").click(function(){
      $(".byteHomeButton1").hide();
      $(".byteHomeButton2").hide();
      $("#date").animate({
        height: 'toggle'},
        1000
      );
      $("#calendarSpacer").animate({
        height: 'toggle'},
        1000
      );
      $("#calendar").animate({
        height: 'toggle'},
        1000
      );
      $("#calendarTab").animate({
        height: 'toggle'},
        1000
      );
     /* $(".leftline").animate({
        height: 'toggle'},
        1000
      );*/
      $(".horizontallines").animate({
        height: 'toggle'},
        1000
      );
      $("#bannerSpacer").animate({
        height: 'toggle'},
        1000
      );
    });

    $(".exitIcon2").click(function(){
      $(".byteHomeButton1").animate({
        height: 'toggle'},
        1000
      );
      $(".byteHomeButton2").animate({
        height: 'toggle'},
        1000
      );
      $("#date").animate({
        height: 'toggle'},
        1000
      );
      $("#calendarSpacer").animate({
        height: 'toggle'},
        1000
      );
      $("#calendar").animate({
        height: 'toggle'},
        1000
      );
      $("#calendarTab").animate({
        height: 'toggle'},
        1000
      );
      /*$(".leftline").animate({
        height: 'toggle'},
        1000
      );*/
      $(".horizontallines").animate({
        height: 'toggle'},
        1000
      );
      $("#bannerSpacer").animate({
        height: 'toggle'},
        1000
      );
    });
});




//<!-- Go to New Section -->


$(".start").click(function(){
  "use strict";
	$("#sal").hide();
  $("#henry").animate({
    height: 'toggle'
  });
});

//<!-- Henry's Nav -->
