$(document).ready(function(){

<!-- byte collapse -->


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



<!-- navMenu collapse -->


    $(".navButton").click(function(){
        $("#date").animate({
          height: 'toggle'},
          100
        );
        $(".byteHomeButton1").animate({
          height: 'toggle'},
          100
        );
        $(".byteDropdown1").hide();
        $(".byteHomeButton2").animate({
          height: 'toggle'},
          100
        );
        $(".byteDropdown2").hide();
        $("#navMenu").animate({
          height: 'toggle'},
          100
        );
        $("#calendarTab").animate({
          height: 'toggle'},
          100
        );
        $(".horizontallines").animate({
          height: 'toggle'},
          100
        );
        $("#bannerSpacer").animate({
          height: 'toggle'},
          100
        );
    });

    $(".exitIcon1").click(function(){
        $("#date").animate({
          height: 'toggle'},
          100
        );
        $(".byteHomeButton1").animate({
          height: 'toggle'},
          100
        );
        $(".byteDropdown1").hide();
        $(".byteHomeButton2").animate({
          height: 'toggle'},
          100
        );
        $(".byteDropdown2").hide();
        $("#navMenu").animate({
          height: 'toggle'},
          100
        );
        $("#calendarTab").animate({
          height: 'toggle'},
          100
        );
        $(".horizontallines").animate({
          height: 'toggle'},
          100
        );
        $("#bannerSpacer").animate({
          height: 'toggle'},
          100
        );
    });






<!-- calendar collapse -->



      $("#calendarTab").click(function(){
      $(".byteHomeButton1").hide();
      $(".byteHomeButton2")..hide();
      $("#date").animate({
        height: 'toggle'},
        100
      );
      $("#calendarSpacer").animate({
        height: 'toggle'},
        100
      );
      $("#calendar").animate({
        height: 'toggle'},
        100
      );
      $("#calendarTab").animate({
        height: 'toggle'},
        100
      );
      $(".leftline").animate({
        height: 'toggle'},
        100
      );
      $(".horizontallines").animate({
        height: 'toggle'},
        100
      );
      $("#bannerSpacer").animate({
        height: 'toggle'},
        100
      );
    });

    $(".exitIcon2").click(function(){
      $(".byteHomeButton1").animate({
        height: 'toggle'},
        100
      );
      $(".byteHomeButton2").animate({
        height: 'toggle'},
        100
      );
      $("#date").animate({
        height: 'toggle'},
        100
      );
      $("#calendarSpacer").animate({
        height: 'toggle'},
        100
      );
      $("#calendar").animate({
        height: 'toggle'},
        100
      );
      $("#calendarTab").animate({
        height: 'toggle'},
        100
      );
      $(".leftline").animate({
        height: 'toggle'},
        100
      );
      $(".horizontallines").animate({
        height: 'toggle'},
        100
      );
      $("#bannerSpacer").animate({
        height: 'toggle'},
        100
      );
    });
});




<!-- Go to New Section -->


$(".start").click(function(){
  $("#sal").hide();
  $("#henry").animate({
    height: 'toggle'
  });
});

<!-- Henry's Nav -->
