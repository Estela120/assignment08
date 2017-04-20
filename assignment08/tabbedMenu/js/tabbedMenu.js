// $( function() {
//    $( "#tabs" ).tabs();
//  } );
$(document).ready(function() {

 $( function() {	 
    $( "#tabs" ).tabs({
		event: "mouseover",
//		backgroundColor: "#000fff",
		color: "#ffffff"
	});	 
////SORTABLE
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });	 	 
  });

$("#tabs a").mouseover(function(){
      $('#tabs a').removeClass('active');
      $(this).addClass('active'); //The div we clicked on
    });
	
	
	
	
//$("#tabs div").click(function(){
//      $('#tabs div').removeClass('active');
//      $(this).addClass('active'); //The div we clicked on
//    });

});



$("#tabs p:nth-child(even)").css({
		color: "#000fff"
});