$( document ).ready( function() {
  
  $( ".n_image" ).click(function() {
    $(this).next().toggleClass("active_sport");
  });

  // With JQuery
  $("#bootstrap-slider1").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider2").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider3").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider4").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider5").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider6").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider7").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider8").slider({ min: 0, max: 10, value: 5, focus: true });
  $("#bootstrap-slider9").slider({ min: 0, max: 10, value: 5, focus: true });
  
  
/*  $(function() {
    sliders =  ["amount1", "amount2", "amount3", "amount4", "amount5", "amount6", "amount7", "amount8", "amount9"];
    
    $( ".sport-slider" ).each(function(index) {
      sslider = "#slider"+ (index+1)
        $(sslider).slider({
        value:5,
        min: 0,
        max: 10,
        step: 1,
        slide: function( event, ui ) {
          $( "#"+sliders[index] ).val(  ui.value );
        }
      });
      
       $( "#"+sliders[index] ).val( $( sslider ).slider( "value" ) );
    })
   
  });*/
  
  
});