//•	Create a button on a web page. Use the .click() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 
//   ANSWER  //
//	$(document).ready(function(){
//	$("button").click(function(){
//		alert("The button was clicked.");
//	});
//	});
//	•	Create a button on a web page. Attach the click event using the .bind() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 
//   ANSWER  //
//	$(document).ready(function(){
//	$("#myButton").bind("click", function(event) {
//		alert("The button was bind clicked.");
//	});
//	});

//	•	Create a button on a web page. Attach the click event using the .on() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked.
//   ANSWER  //
//	$(document).ready(function(){
//	$("#myButton").on("click", function(event) {
//		alert("The button was on clicked.");
//	});
//	});

//	•	Create two buttons on a web page. Attach the click event to both buttons using a single handler using the .on() method. Again, an alert message should be displayed to the user indicating that a button has been clicked when either of the buttons are actually clicked. 
//   ANSWER  //
//	$(document).ready(function(){
//	$("button").on("click", function(event) {
//		alert("one of the buttons was on clicked.");
//	});
//	});


//	•	Create a div on a web page. Use jQuery to set the div element to 400px wide and 400px high. Attach the click, mouseenter, and mouseleave events using the .on() method. Display an alert message to the user indicating that the div was either clicked on, the mouse entered it, or the mouse left it. 
//   ANSWER  //
//$(document).ready(function(){	$("div").css("width","400px").css("heigth","400px");
//});
//
//$(document).ready(function(){	
//	$("div").on ({			
//	mouseenter: function() {alert("The mouse was over the div.");},
//	mouseleave: function() {alert("The mouse was out of the div.");},			
//	click: function()      {alert("The div was clicked!");} 
//	});
//});
	

//	•	Rewrite the code from number 5. This time add a span tag to the web page. Display three different messages within the span tag when the user enters the div, leaves the div, or clicks on the div.
//   ANSWER  //
//$(document).ready(function(){	
//	$("span").on ({			
//	mouseenter: function() {$("span").text("The mouse was over the div");},	
//	mouseleave: function() {$("span").text("The mouse was out of the div.");},			
//	click: function()      {$("span").text("The div was clicked!");} 
//	});
//});
////  EXPERIMENT ////
////$(document).ready(function(){	
////	$("#beginning button").append(" <span class='message2'> Message2</span>");
////});

//	•	Create a link within the web page and set its href attribute to browse to google.com. When the user clicks the link, first, prevent it from redirecting to that web site. Second, programmatically style the link so that its color changes to red. Third, display the name of the node that triggered the event within an alert box.
//   ANSWERS //
//$(document).ready(function(){
//	$("#redirect").click(function () {
//	$("#redirect").attr("href","http://live-eadesign.pantheonsite.io/")	
//	});
//});

//$(document).ready(function(){
//	$("a").click(function () {
//	$("a").css("color", "red");	
//	});
//});

//$(document).ready(function(){
//	$("a").click(function(event) {
//   alert( "clicked: " + event.target.nodeName );
//	});
//});

//	•	Create a div tag within the web page. As the user resizes the browser, replaceWith the width and height of the browser window within the div tag.
//   ANSWER //
//$(window).resize(function() {
//	$("#beginning").text($(window).width());
//	$("#container").text($(window).height());
//});

//	•	Create a text field using the <input> tag. When the input has focus, set the background to a light gray color. When the input does not have focus, reset the background back to a white color.
//   ANSWER // <input type="text" readonly id="result">
//$(document).ready(function(){
//
//$(window).focusin(function() {
//	$('input:text').focus(function () {
//    $(this).css({ 'background': 'lightgray' });
//});
//
//$('input:text').blur(function () {
//    $(this).css({ 'background': 'white' });
//});
//});
//});

//**	•	Add a form tag within a web page complete with 2 input fields: one that collects name and a second that collects an email. Add a submit button. When the user submits the form, if any one of the two fields is left empty, display an alert box to the user indicating that the fields are required. Give the field that the user left empty a red border. If both fields have values in them, set their borders to green.
//   ANSWER //
//	$("#myForm").submit(function(e){
//		if(($("#name").val()) === "" || ($("#email").val() === "")) {
//			e.preventDefault();
////		$(this).addClass("higlight");
//			$(this).css("border", "solid 2 px red")
//			alert("All information is required");	
//			} else{
//			$(this).css("border", "solid 2 px green")
//}
//		});

/////////////////
//$("#myForm").submit(function() {
//	$(".required input").each(function() {
//		if ($(this).val() == "") {
////		$(this).addClass("highlight");
//			$(this).css("border", "solid 2 px red")
//			alert("All information is required");	
//		} else {
//			$(this).css("border", "solid 2 px green")
//}
//	});
//});

//	if($(".required input").hasClass("higlight")) {
//		alert("All information is required");
//	}
//});



//The Calculator III (5 points)
//In this part of the assignment you will practice working with jQuery events, styles, and DOM manipulation to create an even better version of the calculator that you created in previous assignments. In this part of the assignment you will use jQuery events to handle the interaction between the user and each button in the calculator. You will also use jQuery styling techniques to stylize all of the calculator buttons and the display. To complete this, follow the steps outlined below:
//	•	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin by referencing the jQuery library and then immediately wire up the jQuery .ready() function. 
//	•	This first part will require you to stylize all of the buttons programmatically. Using jQuery make each button the same width and height, give each button a unique background color, border style, width and color. Also, give the display a unique background color, set the font color and size, and set a unique border style, width, and color.
//	•	Reference the “bubble capture” code from assignment 6. Rewrite this code so that it uses jQuery events and makes use of jQuery DOM manipulation techniques to set the display based on button selections made.
//ANSWER // 
$(document).ready(function(){
	 var btn = $("#calButtons .button");
            btn.css("font-family", "arial, helvetica, sans-serif")
                .css("font-weight", "bold")
                .css("text-decoration", "none")
                .css("background-color", "#dfe3e6")
                .css("color", "#cc1c0d")
                .css("width", "25px")
                .css("margin-bottom", "15px")
                .css("padding", "5px")
				.css("border","solid 1px black");
});

$(document).ready(function(e) {
    $('#seven,#eight,#nine,#four,#five,#six,#one,#two,#three,#zero').click(function(){
		var myVal = $(this).val();
		$('#result').val($('#result').val() + myVal);	
	});
// + #plus//
	$('#plus').click(function(e) { 
		if($('#resultanswer').val() == ''){
			return false;
			$('#equal').attr('onclick','');
		}else if ( $('#operation').attr('class') == 'selectAnswer') {
			$('#operation').val( $('#operation').val() + $('#plus').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}else {
			$('#operation').val( $('#operation').val() + $('#result').val() + $('#plus').val() );
			$('#result').val('');
			$('#result').attr('onclick','');
		}
    });
// - #subtract//	
	$('#subtract').click(function(e) { 
	
		if($('#result').val() == ''){
			return false;	
			$('#equal').attr('onclick','');
		}else if ( $('#operation').attr('class') == 'selectAnswer') {
			$('#operation').val( $('#operation').val() + $('#subtract').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}else {
			$('#operation').val( $('#operation').val() + $('#result').val() + $('#subtract').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}
    });
// / #divide	
	$('#divide').click(function(e) { 
		if($('#result').val() == ''){
			return false;	
			$('#equal').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'selectAnswer') {
			$('#operation').val( $('#operation').val() + $('#divide').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}
		else{
			$('#operation').val( $('#operation').val() + $('#result').val() + $('#divide').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}
    });
// * #multiply//	
	$('#multiply').click(function(e) { 
		if($('#result').val() == ''){
			return false;	
			$('#equal').attr('onclick','');
		}
		else if ( $('#operation').attr('class') == 'selectAnswer') {
			$('#operation').val( $('#operation').val() + $('#multiply').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}else {
			$('#operation').val( $('#operation').val() + $('#result').val() + $('#multiply').val() );
			$('#result').val('');
			$('#equal').attr('onclick','');
		}
    });
// = #equal//	
	$('#equal').click(function(){		
		if($('#equal').attr('onclick') != 'return false'){	
			var a = $('#result').val();
			var b = $('#operation').val();
//			var c = $('equal').val();			
//			$("#result").math('c', a, b); 
			var c = b + a;
//			var c = b.concat(a);
			$('#result').val(eval(c));
			$('#operation').val(eval(c));
			$('#operation').addClass('selectAnswer');
			$('#equal').attr('onclick','return false');
		}
	});
// C #cancel
	$('#cancel').click(function(){
		$('#result').val('');
		$('#operation').val('');
		$('#operation').removeClass('selectAnswer');
		$('#equal').attr('onclick','');
	});
});


/////////////////////////////////////
  //   JAVASCRIPT ANSWER
  //window.document("load", init, false){
//	init() {
//getElementById("seven").addEventListener("click", enter, false);		
//getElementById("eight").addEventListener("click", enter, false);
//getElementById("nine").addEventListener("click", enter, false);
//getElementById("divide").addEventListener("click", enter, false);
//getElementById("four").addEventListener("click", enter, false);
//getElementById("five").addEventListener("click", enter, false);
//getElementById("six").addEventListener("click", enter, false);		
//getElementById("multiply").addEventListener("click", enter, false);
//getElementById("one").addEventListener("click", enter, false);
//getElementById("two").addEventListener("click", enter, false);
//getElementById("three").addEventListener("click", enter, false);
//getElementById("substract").addEventListener("click", enter, false);
//getElementById("zero").addEventListener("click", enter, false);
//getElementById("period").addEventListener("click", enter, false);
//getElementById("add").addEventListener("click", enter, false);
//getElementById("equal").addEventListener("click", enter, false);
//	}

//	•	Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls.   
//	•	For the equal button, call a function called calculate(). You will not pass any arguments into this function.
//	•	Create a user-defined function called enter() that accepts val as an argument. 
//	•	Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
//	•	Create a user-defined function called calculate() that doesn’t accept any arguments.
//	•	Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.
//Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
//HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….
     //OK    ANSWER
//window.document("load", init, false){
//	init() {
//	var calculator = document.getElementsByName("calculator");
//calculator.addEventListener("click", enter, false) {
//	enter(event) {
//		var val = event.target.value;
//	if( val == "=") {
//		result.value = eval(result.value);
//	} else {
//		result.value += val;
//		}
//	} 
//}
//}
//}