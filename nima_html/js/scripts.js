$( document ).ready( function() {
  
  $( ".n_image" ).click(function() {
    $(this).next().toggleClass("active_sport");
  });

  // With JQuery
  $('#ex1').slider({
    formatter: function(value) {
      return value;
    }
  });
  
  
});