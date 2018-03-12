$(document).ready(function(){



	"use strict";

	//Prehidden stuff
	$("section#quickquizpage").hide();
	$("section#statspage").hide();
	$("span.back").hide();



//To stats from Nav Menu
	$(".statnavButton").click(function(){


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
		$("section#sal").hide();
		$("section#quickquizpage").hide();
		$("section#statspage").show();
		$("span.back").show();
	});



//To quick quiz from Nav Menu
	$(".qqnavButton").click(function(){
		$("section#sal").hide();
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
		$("section#quickquizpage").show();
		$("span.back").show();
	});

		$(".homenavButton").click(function(){
		$(".allquestionbody").slideUp();
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
		$("section#statspage").hide();
		$("section#quickquizpage").hide();
		$("span.back").show();
			$("section#sal").show();

	});



//byte collapse -->


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
		$(".htquestion").slideDown();
		$(".htquestion1").slideDown();
		$(".htquestion2").slideDown();
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
		  $(".bluerounderbarc").slideToggle();
		  $(".whiterounderbarc").slideToggle(
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
		$(".whiterounderbarc").slideToggle(100);
				  $(".bluerounderbarc").slideToggle(100);




    });


//end ready function
});



//<!-- Go to New Section -->
/*

$(".start").click(function(){
  "use strict";
	$("#sal").hide();
  $("#henry").animate({
    height: 'toggle'
  });
});

//<!-- Henry's Nav -->*/
