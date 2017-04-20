//A jQuery Image Selection Slideshow (10 points)	
//In this part of the assignment you will create an image selection slideshow using jQuery. The image below outlines what the final result should look like. To receive maximum points on this part of the assignment, be sure to take the following into account:
//	•	The slideshow must have a minimum of 5 images.
//	•	Add a numeric paging widget underneath the images. Make sure to stylize them using jQuery so that the selected image is clearly differentiated from the non-selected images. 
//	•	Only one image will fade into view at a time. Depending on the number selected in the paging widget, the image that represents that number should fade into view. Make sure to take advantage of jQuery effects for this fade into view.
/// ANSWER ////

$(document).ready(function(){
	var image = ["img/flowers_01.jpg", "img/flowers_02.jpg", "img/flowers_03.jpg","img/flowers_04.jpg", "img/flowers_05.jpg"];
	var captionsTxt = ["flor01", "flor02", "flor03", "flor04", "flor05"];
	var counter= 0;
	
	var clickOut = function slideShowFade() {
		$("#pic").fadeOut(300, function(){
		$("#pic").attr("src", image[counter]);
		$("#captions").text(captionsTxt[counter]);		
do{		
		$("#pic").fadeIn(500).delay(300);
		slideShowFade()	
	   	counter++;
	} while (counter == 5);
		});
	}
	clickOut();
});
